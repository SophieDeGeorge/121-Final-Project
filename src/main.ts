//import { AmmoPhysics } from '@enable3d/ammo-physics';
import * as THREE from 'three';

document.body.innerHTML = `
  <p>welcome to chud central</p>
`;

// scene
const width = globalThis.innerWidth / 2;
const height = globalThis.innerHeight * 2 / 3;
const aspectRatio = width / height;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

// camera
const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
camera.position.set(10, 10, 20);
camera.lookAt(0, 1, 0);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// physics
//const physics = new AmmoPhysics(scene);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// clock
//const clock = new THREE.Clock();

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //physics.update(clock.getDelta() * 1000);
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// light
scene.add(new THREE.HemisphereLight(0xffffff, 0x000000, 1));
scene.add(new THREE.AmbientLight(0xffffff, 1));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(50, 200, 100);
light.position.multiplyScalar(1.3);
