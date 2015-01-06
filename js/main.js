window.onload = function(argument) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture("img/sun.jpg")} );
    var sphere = new THREE.Mesh( geometry, material );
    
    scene.add( sphere );

    camera.position.z = 18;

    var render = function() {
        requestAnimationFrame(render);

        scene.rotation.y += 0.002;
        //scene.rotation.y += 0.009;

        renderer.render(scene, camera);
    };

    render();

};
