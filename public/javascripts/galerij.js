var scene = new THREE.Scene();

// Camera setup
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 5);

// Renderer setup
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

// Lights setup
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var spotLight = new THREE.SpotLight(0xffaa00, 1);
spotLight.position.set(0, 10, 0);
scene.add(spotLight);

// Create the hallway walls
var objLoader = new THREE.OBJLoader();
var mtlLoader = new THREE.MTLLoader();

mtlLoader.load('path/to/your/model.mtl', function (materials) {
    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.load('path/to/your/model.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.side = THREE.DoubleSide; // Ensure textures are visible from both sides
            }
        });
        scene.add(object);
    });
});

// PointerLockControls for mouse look
var controls = new THREE.PointerLockControls(camera, document.body);

// Event listeners for pointer lock
document.body.addEventListener('click', function () {
    controls.lock();
}, false);

controls.addEventListener('lock', function () {
    console.log('Pointer lock activated');
});

controls.addEventListener('unlock', function () {
    console.log('Pointer lock deactivated');
});

scene.add(controls.getObject());

var moveForward = false;
var initialDirection = new THREE.Vector3();

// Store the initial forward direction of the camera
camera.getWorldDirection(initialDirection);
initialDirection.y = 0; // Keep movement in the horizontal plane
initialDirection.normalize();

// Event listeners for key controls
var onKeyDown = function (event) {
    switch (event.code) {
        case 'KeyW':
            moveForward = true;
            break;
    }
};

var onKeyUp = function (event) {
    switch (event.code) {
        case 'KeyW':
            moveForward = false;
            break;
    }
};

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (moveForward) {
        camera.position.add(initialDirection.clone().multiplyScalar(0.1));
    }

    renderer.render(scene, camera);
}

animate();
