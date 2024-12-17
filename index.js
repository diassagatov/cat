import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.getElementById("canvas").appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, w/h, 0.01, 20);
camera.position.z = 8;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();

const geo = new THREE.IcosahedronGeometry(1.0, 12);
const mat = new THREE.MeshStandardMaterial({
    map: loader.load("./cat.jpeg"),
});

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const light = new THREE.HemisphereLight(0xffffff, 0xff00fc);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.04;

    renderer.render(scene, camera);
}

animate();
