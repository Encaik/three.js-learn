function onload() {
  var container = document.getElementById('container');
  console.log("1");
  var scene = new THREE.Scene();
  console.log("2");
  var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
  camera.position.set(0, 0, 3.3333);
  scene.add(camera);
  console.log("3");
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);
  console.log("4");
  var geometry = new THREE.PlaneGeometry(1, 1);
  var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardNodeMaterial());
  scene.add(mesh);
  console.log("5");
  renderer.render(scene, camera);
}