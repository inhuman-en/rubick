window.onload = function(argument) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var material = new THREE.MeshNormalMaterial({
        color: 0xfafafa,
        wireframe: true,
        wireframeLinewidth: 4
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 4;

    var render = function() {
        requestAnimationFrame(render);

        cube.rotation.x += 0.009;
        cube.rotation.y += 0.009;

        renderer.render(scene, camera);
    };

    render();

}
