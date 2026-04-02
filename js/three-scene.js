/* ============================================
   J+S — THREE.JS 3D SCENE
   Hero background: floating geometric wireframes
   + particle system + mouse parallax
   ============================================ */

(function () {
  const canvas = document.getElementById('threeCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ---- SETUP ----
  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  camera.position.set(0, 0, 22);

  // ---- MATERIALS ----
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x7fffd4,
    transparent: true,
    opacity: 0.18
  });
  const dotMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.55
  });

  // ---- GEOMETRIES ----
  const shapes = [];

  // Large background icosahedron
  const icoGeo = new THREE.IcosahedronGeometry(9, 1);
  const icoMesh = new THREE.Mesh(icoGeo, wireMat.clone());
  icoMesh.material.opacity = 0.05;
  scene.add(icoMesh);
  shapes.push({ mesh: icoMesh, rx: 0.0008, ry: 0.0012, rz: 0 });

  // Medium torus-knot wireframe
  const tkGeo = new THREE.TorusKnotGeometry(3.5, 0.6, 80, 12);
  const tkEdges = new THREE.EdgesGeometry(tkGeo);
  const tkLines = new THREE.LineSegments(tkEdges, edgeMat.clone());
  tkLines.position.set(8, -2, -4);
  tkLines.material.opacity = 0.12;
  scene.add(tkLines);
  shapes.push({ mesh: tkLines, rx: 0.003, ry: 0.005, rz: 0.002 });

  // Left octahedron wireframe
  const octGeo = new THREE.OctahedronGeometry(2.5, 0);
  const octEdges = new THREE.EdgesGeometry(octGeo);
  const octLines = new THREE.LineSegments(octEdges, edgeMat.clone());
  octLines.position.set(-9, 3, -2);
  scene.add(octLines);
  shapes.push({ mesh: octLines, rx: 0.004, ry: 0.002, rz: 0.003 });

  // Small cubes
  const smallCubeDefs = [
    { pos: [-5, -4, 1],  size: 1.2,  rx: 0.006, ry: 0.004 },
    { pos: [4,  5, 0],   size: 0.9,  rx: 0.003, ry: 0.007 },
    { pos: [10, 1, -6],  size: 1.8,  rx: 0.002, ry: 0.005 },
    { pos: [-11,-1,-3],  size: 1.4,  rx: 0.005, ry: 0.003 },
  ];
  smallCubeDefs.forEach(d => {
    const g = new THREE.BoxGeometry(d.size, d.size, d.size);
    const e = new THREE.EdgesGeometry(g);
    const m = new THREE.LineSegments(e, edgeMat.clone());
    m.position.set(...d.pos);
    m.material.opacity = 0.2 + Math.random() * 0.15;
    scene.add(m);
    shapes.push({ mesh: m, rx: d.rx, ry: d.ry, rz: 0 });
  });

  // Tetrahedra
  const tetraDefs = [
    { pos: [6, -5, -2], size: 1.5, rx: 0.005, ry: 0.003 },
    { pos: [-7, 5, -5], size: 2.0, rx: 0.002, ry: 0.006 },
  ];
  tetraDefs.forEach(d => {
    const g = new THREE.TetrahedronGeometry(d.size, 0);
    const e = new THREE.EdgesGeometry(g);
    const m = new THREE.LineSegments(e, edgeMat.clone());
    m.position.set(...d.pos);
    m.material.opacity = 0.22;
    scene.add(m);
    shapes.push({ mesh: m, rx: d.rx, ry: d.ry, rz: 0.004 });
  });

  // ---- PARTICLES ----
  const particleCount = 280;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.06,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ---- CONNECTING LINES (near particles) ----
  const linePairs = [];
  const lineGroup = new THREE.Group();
  scene.add(lineGroup);

  function buildConnections() {
    lineGroup.clear();
    const posArr = particleGeo.attributes.position.array;
    const threshold = 5;
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posArr[i*3]   - posArr[j*3];
        const dy = posArr[i*3+1] - posArr[j*3+1];
        const dz = posArr[i*3+2] - posArr[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < threshold) {
          const geo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(posArr[i*3], posArr[i*3+1], posArr[i*3+2]),
            new THREE.Vector3(posArr[j*3], posArr[j*3+1], posArr[j*3+2])
          ]);
          const mat = new THREE.LineBasicMaterial({
            color: 0x7fffd4,
            transparent: true,
            opacity: (1 - dist / threshold) * 0.08
          });
          lineGroup.add(new THREE.Line(geo, mat));
        }
      }
    }
  }
  buildConnections();

  // ---- MOUSE PARALLAX ----
  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ---- RESIZE ----
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // ---- CLOCK ----
  const clock = new THREE.Clock();

  // ---- ANIMATE ----
  function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // smooth mouse follow
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;

    // camera gentle sway
    camera.position.x = target.x * 1.5;
    camera.position.y = -target.y * 1.0;
    camera.lookAt(scene.position);

    // rotate shapes
    shapes.forEach(s => {
      s.mesh.rotation.x += s.rx;
      s.mesh.rotation.y += s.ry;
      if (s.rz) s.mesh.rotation.z += s.rz;
    });

    // rotate particles slowly
    particles.rotation.y = elapsed * 0.02;
    particles.rotation.x = elapsed * 0.01;

    // pulse background icosahedron
    const pulse = 1 + Math.sin(elapsed * 0.5) * 0.03;
    icoMesh.scale.setScalar(pulse);

    renderer.render(scene, camera);
  }

  animate();
})();
