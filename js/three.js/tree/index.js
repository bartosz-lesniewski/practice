let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 50);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const handleResize = () => {
	const { innerWidth, innerHeight } = window;
	renderer.setSize(innerWidth, innerHeight);
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
};

const colorBaseOfTree = new THREE.Color("hsl(86, 100%, 20%)");
const colorMoonLight = new THREE.Color("hsl(216, 5%, 82%)");

const baseOfTreeGeometry = new THREE.CircleGeometry(7, 20);
const baseOfTreeMaterial = new THREE.MeshLambertMaterial({
	color: colorBaseOfTree,
});
const baseOfTree = new THREE.Mesh(baseOfTreeGeometry, baseOfTreeMaterial);
const moonLight = new THREE.PointLight(colorMoonLight, 3);

moonLight.position.set(40, -40, 10);

scene.add(moonLight);
scene.add(baseOfTree);

const loop = () => {
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
};

loop();
window.addEventListener("resize", handleResize);
