// ============================================================
// BossZY 3D Space — Interactive.js (Three.js Implementation)
// ============================================================

let scene, camera, renderer;
let currentMode = 'galaxy'; // 'galaxy', 'physics', 'gallery'
let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let width = window.innerWidth;
let height = window.innerHeight;

// Mode-specific variables
let galaxyPoints;
let physicsObjects = [];
let galleryGroup;
let isDraggingGallery = false;
let previousMousePosition = { x: 0, y: 0 };
let galleryRotationVelocity = 0.005;

// Physics dragging variables
let raycaster = new THREE.Raycaster();
let raycastPlane;
let draggedObject = null;
let dragOffset = new THREE.Vector3();
let planeNormal = new THREE.Vector3(0, 0, 1);
let lastDragPos = new THREE.Vector3();
let throwVelocity = new THREE.Vector3();

// List of gallery textures
const texturesList = [
  'public/images/2getr.png',
  'public/images/pos.png',
  'public/images/unitask.png',
  'public/images/music-ad.png',
  'public/images/bot.png',
  'public/images/network.png'
];
let loadedTextures = [];

// ============================================
// INITIALIZATION
// ============================================
function init() {
  const container = document.getElementById('three-container');
  if (!container) return;

  // Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050510, 0.015);

  // Camera setup
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 15;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
  mainLight.position.set(10, 20, 15);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const pointLight1 = new THREE.PointLight(0x7c3aed, 2, 30);
  pointLight1.position.set(-8, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 30);
  pointLight2.position.set(8, -5, 5);
  scene.add(pointLight2);

  // Load textures
  const textureLoader = new THREE.TextureLoader();
  texturesList.forEach(url => {
    textureLoader.load(url, (texture) => {
      loadedTextures.push(texture);
      // Re-render gallery if loaded while in gallery mode
      if (currentMode === 'gallery' && loadedTextures.length === texturesList.length) {
        setupGallery();
      }
    });
  });

  // Invisible plane for physics dragging calculation
  raycastPlane = new THREE.Plane(planeNormal, 0);

  // Events
  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  
  // Touch support
  document.addEventListener('touchstart', onTouchStart, { passive: false });
  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('touchend', onTouchEnd, { passive: false });

  // Init default mode
  switchMode('galaxy');

  // Animation Loop
  animate();
}

// ============================================
// MODE SWITCHER
// ============================================
window.switchMode = function(mode) {
  if (mode === currentMode) return;
  currentMode = mode;

  // Update UI buttons active states
  ['galaxy', 'physics', 'gallery'].forEach(m => {
    const btn = document.getElementById(`btn-${m}`);
    if (btn) btn.classList.toggle('active', m === mode);
  });

  // Toggle action buttons visibility
  const physActions = document.getElementById('physics-actions');
  if (physActions) {
    physActions.style.display = mode === 'physics' ? 'flex' : 'none';
  }

  // Clear existing mode assets
  clearSceneObjects();

  // Reset Camera Position
  gsapCamera(0, 0, 15);

  // Setup mode specific structures
  const instructions = document.getElementById('mode-instructions');
  if (mode === 'galaxy') {
    setupGalaxy();
    if (instructions) instructions.textContent = 'เลื่อนเมาส์ไปมาเพื่อหมุนและดึงดูดกลุ่มดาวอนุภาค 3 มิติ';
  } else if (mode === 'physics') {
    setupPhysics();
    if (instructions) instructions.textContent = 'คลิกปุ่มเพื่อเสกวัตถุ หรือคลิกลากและสะบัดขว้างวัตถุด้วยเมาส์';
  } else if (mode === 'gallery') {
    setupGallery();
    if (instructions) instructions.textContent = 'คลิกลากซ้าย-ขวา เพื่อหมุนดูป้ายผลงาน 3D Carousel';
  }
};

function clearSceneObjects() {
  // Clear Galaxy
  if (galaxyPoints) {
    scene.remove(galaxyPoints);
    galaxyPoints.geometry.dispose();
    galaxyPoints.material.dispose();
    galaxyPoints = null;
  }

  // Clear Physics
  physicsObjects.forEach(obj => {
    scene.remove(obj.mesh);
    obj.mesh.geometry.dispose();
    if (Array.isArray(obj.mesh.material)) {
      obj.mesh.material.forEach(m => m.dispose());
    } else {
      obj.mesh.material.dispose();
    }
  });
  physicsObjects = [];
  draggedObject = null;

  // Clear Gallery
  if (galleryGroup) {
    scene.remove(galleryGroup);
    galleryGroup.traverse(child => {
      if (child.isMesh) {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
    galleryGroup = null;
  }
}

// Smooth camera movement using simple interpolation
function gsapCamera(x, y, z) {
  // Simple camera reposition
  camera.position.set(x, y, z);
  camera.lookAt(0, 0, 0);
}

// ============================================
// 1. GALAXY MODE SETUP
// ============================================
function setupGalaxy() {
  const particleCount = 12000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorPurple = new THREE.Color('#7c3aed');
  const colorCyan = new THREE.Color('#06b6d4');

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Spiral formula
    const r = Math.pow(Math.random(), 2.5) * 20;
    const theta = r * 0.4 + Math.random() * Math.PI * 2;
    const spiralBranch = ((i / 3) % 3) * (2 * Math.PI / 3); // 3 branches
    
    const x = Math.cos(theta + spiralBranch) * r + (Math.random() - 0.5) * 0.8 * (r * 0.1 + 0.2);
    const y = (Math.random() - 0.5) * 0.5 * (20 - r) / 10;
    const z = Math.sin(theta + spiralBranch) * r + (Math.random() - 0.5) * 0.8 * (r * 0.1 + 0.2);

    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;

    // Mixed colors
    const mixedColor = colorPurple.clone().lerp(colorCyan, r / 20);
    colors[i] = mixedColor.r;
    colors[i + 1] = mixedColor.g;
    colors[i + 2] = mixedColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  galaxyPoints = new THREE.Points(geometry, material);
  scene.add(galaxyPoints);
}

// ============================================
// 2. PHYSICS PLAYGROUND MODE SETUP
// ============================================
function setupPhysics() {
  // Pre-spawn 6 objects
  for (let i = 0; i < 6; i++) {
    spawnShape();
  }
}

window.spawnShape = function() {
  if (currentMode !== 'physics') return;

  const geometries = [
    new THREE.SphereGeometry(0.8, 32, 32),
    new THREE.BoxGeometry(1.2, 1.2, 1.2),
    new THREE.TorusGeometry(0.6, 0.25, 16, 100),
    new THREE.ConeGeometry(0.8, 1.5, 32),
    new THREE.CylinderGeometry(0.6, 0.6, 1.4, 32)
  ];

  const colors = [0x7c3aed, 0x06b6d4, 0x3b82f6, 0xf43f5e, 0x10b981, 0xf59e0b];
  
  const geo = geometries[Math.floor(Math.random() * geometries.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  // Custom glowing material
  const mat = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.1,
    metalness: 0.1,
    emissive: color,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.95
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // Randomize initial position and velocity
  mesh.position.set(
    (Math.random() - 0.5) * 8,
    6 + Math.random() * 4,
    (Math.random() - 0.5) * 4
  );

  scene.add(mesh);

  physicsObjects.push({
    mesh: mesh,
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.1,
      -0.05,
      (Math.random() - 0.5) * 0.05
    ),
    radius: 1.0,
    mass: 1.0 + Math.random() * 1.5
  });
};

window.clearShapes = function() {
  physicsObjects.forEach(obj => {
    scene.remove(obj.mesh);
    obj.mesh.geometry.dispose();
    obj.mesh.material.dispose();
  });
  physicsObjects = [];
  draggedObject = null;
};

// Simple physics updater
function updatePhysics() {
  const gravity = -0.01;
  const bounceCoeff = 0.72; // Elastic bounce absorption

  // Boundary box limits
  const limitX = 9;
  const limitY = 6.5;
  const limitZ = 4;

  physicsObjects.forEach((obj, idx) => {
    // If user is dragging the object, don't apply gravity or normal velocity updates
    if (draggedObject && draggedObject === obj.mesh) {
      return;
    }

    // Apply gravity
    obj.velocity.y += gravity;

    // Apply air resistance
    obj.velocity.multiplyScalar(0.985);

    // Apply velocity
    obj.mesh.position.add(obj.velocity);

    // Bouncing off bottom wall
    if (obj.mesh.position.y < -limitY) {
      obj.mesh.position.y = -limitY;
      obj.velocity.y = -obj.velocity.y * bounceCoeff;
      // Friction
      obj.velocity.x *= 0.95;
      obj.velocity.z *= 0.95;
    }

    // Top wall
    if (obj.mesh.position.y > limitY) {
      obj.mesh.position.y = limitY;
      obj.velocity.y = -obj.velocity.y * bounceCoeff;
    }

    // Left & Right walls
    if (obj.mesh.position.x < -limitX) {
      obj.mesh.position.x = -limitX;
      obj.velocity.x = -obj.velocity.x * bounceCoeff;
    }
    if (obj.mesh.position.x > limitX) {
      obj.mesh.position.x = limitX;
      obj.velocity.x = -obj.velocity.x * bounceCoeff;
    }

    // Front & Back walls
    if (obj.mesh.position.z < -limitZ) {
      obj.mesh.position.z = -limitZ;
      obj.velocity.z = -obj.velocity.z * bounceCoeff;
    }
    if (obj.mesh.position.z > limitZ) {
      obj.mesh.position.z = limitZ;
      obj.velocity.z = -obj.velocity.z * bounceCoeff;
    }

    // Slow rotation based on movement
    obj.mesh.rotation.x += obj.velocity.y * 0.2;
    obj.mesh.rotation.y += obj.velocity.x * 0.2;

    // Simple elastic sphere-to-sphere collisions
    for (let j = idx + 1; j < physicsObjects.length; j++) {
      const other = physicsObjects[j];
      if (draggedObject && draggedObject === other.mesh) continue;

      const delta = new THREE.Vector3().subVectors(other.mesh.position, obj.mesh.position);
      const dist = delta.length();
      const minDist = obj.radius + other.radius;

      if (dist < minDist) {
        // Resolve overlap
        const overlap = minDist - dist;
        const normal = delta.clone().normalize();
        
        // Push apart proportional to mass
        const totalMass = obj.mass + other.mass;
        obj.mesh.position.addScaledVector(normal, -overlap * (other.mass / totalMass));
        other.mesh.position.addScaledVector(normal, overlap * (obj.mass / totalMass));

        // Elastic collision velocities
        const relativeVel = new THREE.Vector3().subVectors(obj.velocity, other.velocity);
        const velAlongNormal = relativeVel.dot(normal);

        if (velAlongNormal > 0) {
          const impulse = (2 * velAlongNormal) / totalMass;
          obj.velocity.addScaledVector(normal, -impulse * other.mass * 0.85);
          other.velocity.addScaledVector(normal, impulse * obj.mass * 0.85);
        }
      }
    }
  });
}

// ============================================
// 3. 3D CAROUSEL GALLERY MODE SETUP
// ============================================
function setupGallery() {
  galleryGroup = new THREE.Group();
  scene.add(galleryGroup);

  const radius = 7.5;
  const itemsCount = texturesList.length;

  for (let i = 0; i < itemsCount; i++) {
    const angle = (i / itemsCount) * Math.PI * 2;
    
    // Create card geometries
    const cardGeo = new THREE.PlaneGeometry(3.6, 2.2);
    
    // Glassmorphic border/back
    let cardMat;
    if (loadedTextures[i]) {
      cardMat = new THREE.MeshBasicMaterial({
        map: loadedTextures[i],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95
      });
    } else {
      // Fallback
      cardMat = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
    }

    const cardMesh = new THREE.Mesh(cardGeo, cardMat);

    // Circular layout
    cardMesh.position.set(
      Math.sin(angle) * radius,
      (Math.random() - 0.5) * 0.2, // Tiny height offset for depth
      Math.cos(angle) * radius
    );

    // Look at center
    cardMesh.rotation.y = angle;

    galleryGroup.add(cardMesh);
  }
}

// ============================================
// INTERACTION AND EVENTS
// ============================================
function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function onMouseMove(e) {
  // Normalize mouse coordinates for raycasting / galaxy movement
  mouse.targetX = (e.clientX / width) * 2 - 1;
  mouse.targetY = -(e.clientY / height) * 2 + 1;

  if (currentMode === 'gallery' && isDraggingGallery) {
    const deltaX = e.clientX - previousMousePosition.x;
    galleryRotationVelocity = deltaX * 0.002;
    if (galleryGroup) {
      galleryGroup.rotation.y += galleryRotationVelocity;
    }
    previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  // Handle physics dragging movement
  if (currentMode === 'physics' && draggedObject) {
    const mouseProj = new THREE.Vector2(mouse.targetX, mouse.targetY);
    raycaster.setFromCamera(mouseProj, camera);
    
    const intersectionPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(raycastPlane, intersectionPoint);
    
    const targetPos = intersectionPoint.sub(dragOffset);
    
    // Update velocity based on position change (for throwing)
    throwVelocity.subVectors(targetPos, draggedObject.position);
    
    // Smoothly drag object to mouse point
    draggedObject.position.copy(targetPos);
  }
}

function onMouseDown(e) {
  // Prevent selecting overlays
  if (e.target.closest('.clickable')) return;

  const mouseProj = new THREE.Vector2(
    (e.clientX / width) * 2 - 1,
    -(e.clientY / height) * 2 + 1
  );

  if (currentMode === 'gallery') {
    isDraggingGallery = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    galleryRotationVelocity = 0; // stop auto rotation on drag
  }

  if (currentMode === 'physics') {
    raycaster.setFromCamera(mouseProj, camera);
    
    // Raycast check
    const meshList = physicsObjects.map(obj => obj.mesh);
    const intersects = raycaster.intersectObjects(meshList);

    if (intersects.length > 0) {
      const hitObj = intersects[0].object;
      draggedObject = hitObj;

      // Lock plane distance to object Z
      raycastPlane.setFromNormalAndCoplanarPoint(planeNormal, hitObj.position);
      
      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(raycastPlane, intersectionPoint);
      
      // Offset from center of geometry
      dragOffset.copy(intersectionPoint).sub(hitObj.position);
      
      // Reset throw tracker
      throwVelocity.set(0, 0, 0);
    }
  }
}

function onMouseUp(e) {
  isDraggingGallery = false;

  // Let go of physics object with a throw velocity
  if (currentMode === 'physics' && draggedObject) {
    const pObj = physicsObjects.find(o => o.mesh === draggedObject);
    if (pObj) {
      // Limit maximum throw velocity
      throwVelocity.clampLength(0, 0.8);
      pObj.velocity.copy(throwVelocity);
    }
    draggedObject = null;
  }
}

// Touch Event Handlers
function onTouchStart(e) {
  if (e.touches.length === 0) return;
  const touch = e.touches[0];
  onMouseDown({
    clientX: touch.clientX,
    clientY: touch.clientY,
    target: touch.target
  });
}

function onTouchMove(e) {
  if (e.touches.length === 0) return;
  const touch = e.touches[0];
  onMouseMove({
    clientX: touch.clientX,
    clientY: touch.clientY
  });
}

function onTouchEnd(e) {
  onMouseUp(e);
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
  requestAnimationFrame(animate);

  // Mouse interpolation for smooth galaxy rotation/tilting
  mouse.x += (mouse.targetX - mouse.x) * 0.08;
  mouse.y += (mouse.targetY - mouse.y) * 0.08;

  // Galaxy animations
  if (currentMode === 'galaxy' && galaxyPoints) {
    galaxyPoints.rotation.y += 0.0015;
    // Camera responds gently to mouse
    camera.position.x = mouse.x * 3.5;
    camera.position.y = mouse.y * 3.5;
    camera.lookAt(0, 0, 0);
  }

  // Physics animation update
  if (currentMode === 'physics') {
    updatePhysics();
    // Subtle parallax camera rotation
    camera.position.x = mouse.x * 2.0;
    camera.position.y = mouse.y * 2.0;
    camera.lookAt(0, 0, 0);
  }

  // Gallery animation update
  if (currentMode === 'gallery' && galleryGroup) {
    if (!isDraggingGallery) {
      // Friction slowdown to auto rotation speed
      galleryRotationVelocity += (0.002 - galleryRotationVelocity) * 0.05;
      galleryGroup.rotation.y += galleryRotationVelocity;
    }
    // Interactive mouse vertical shift
    galleryGroup.position.y = mouse.y * 1.5;
    galleryGroup.rotation.x = mouse.y * 0.1;

    // Hover spotlight effect on panels facing camera
    camera.position.x = mouse.x * 1.5;
    camera.lookAt(0, 0, 0);
  }

  renderer.render(scene, camera);
}

// Start everything when page loaded
window.addEventListener('load', init);
