generate();

function generate() {
  var texture1 = new THREE.TextureLoader().load( "grid.jpg" );
  texture1.repeat.set(0.5, 0.5);

  var texture2 = new THREE.TextureLoader().load( "grid.jpg" );

  var sphere = new THREE.SphereGeometry(40, 20, 20);

  for ( var i = 0; i < irnd(5, 2); i ++ ) {

    var object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { map: texture2} ) );

    object.position.x = Math.random() * 300 - 150;
    object.position.y = Math.random() * 300 - 150;
    object.position.z = Math.random() * 300 - 150;

    object.scale.x = object.scale.y = object.scale.z = Math.random() * 2 + 1

    //object.scale.x = Math.random() * 2 + 1;
    //object.scale.y = Math.random() * 2 + 1;
    //object.scale.z = Math.random() * 2 + 1;

    object.castShadow = true;
    object.receiveShadow = true;

    scene.add( object );

    objects.push( object );

  }

  for ( var i = 0; i < irnd(5, 1); i ++ ) {

    console.log("i", i);
    var geometry = new THREE.BoxBufferGeometry( rnd(20) , rnd(20) , rnd(20) );
    var object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture1} ) );

    object.position.x = Math.random() * rnd(30) - 150;
    object.position.y = Math.random() * rnd(30) - 150;
    object.position.z = Math.random() * rnd(30) - 150;

    //object.rotation.x = Math.random() * 2 * Math.PI;
    //object.rotation.y = Math.random() * 2 * Math.PI;
    //object.rotation.z = Math.random() * 2 * Math.PI;

    //object.scale.x = Math.random() * 2 + 1;
    //object.scale.y = Math.random() * 2 + 1;
    //object.scale.z = Math.random() * 2 + 1;

    object.castShadow = true;
    object.receiveShadow = true;

    for (var s=0; s<Math.round((r() > 0.1) + 1); s++) {
      if (s == 1) {
        object = object.clone();
        object.position.x = -object.position.x;
      }
      scene.add( object );

      objects.push( object );
    }
  }
}

function r() {
  return Math.random();
}

function irnd(n, l) {
  return Math.round(Math.random() * n) + l;
}

function rnd(n) {
  return (Math.round(Math.random() * n) + 1) * 10
}

function ris(n) {
  return Math.random() > n;
}

function rbool() {
  return Math.random() < 0.5;
}

function symmetric(o) {
  var n = o.clone;
  n.position.x = -n.position.x;
  return n;
}
