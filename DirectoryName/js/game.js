import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
console.log("game v1.1.11");
import {GLTFLoader} from 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/loaders/GLTFLoader.js';
const loaderGLTF = new GLTFLoader();
loaderGLTF.load( '../skull_downloadable', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );



let change = 0;
let last = 0;
let ev = null;


//#region control keys
let Kshift = false;
let Kspace = false;

let Kw = false;
			let Ka = false;
			let Ks = false;
			let Kd = false;
			let Ki = false;
			let Kj = false;
			let Kk = false;
			let Kl = false;
let speed = 0.1;
			
			let shadows = 0;
document.addEventListener('keypress', (event) => {
  var name = event.key;
  var code = event.code;
  switch(name){
	  case("w"): Kw = true;break;
	  case("a"): Ka = true;break;
	  case("s"): Ks = true;break;
	  case("d"): Kd = true;break;
	  case("i"): Ki = true;break;
	  case("j"): Kj = true;break;
	  case("k"): Kk = true;break;
	  case("l"): Kl = true;break;
	  
		  
		   case(" "): Kspace = true;break;
	  case("p"):
	  
	  if(shadows == 0){shadows = 1;
		console.log("turning on shadows...(low)");
	  plane.receiveShadow = true;
	side1.receiveShadow = true;
	side2.receiveShadow = true;
	side3.receiveShadow = true;
	side4.receiveShadow = true; 
	plane.material.needsUpdate = true;
	side1.material.needsUpdate = true;
	side2.material.needsUpdate = true;
	side3.material.needsUpdate = true;
	side4.material.needsUpdate = true;
	light.needsUpdate = true;
	light.shadow.mapSize.width = 64; // default
light.shadow.mapSize.height = 64; // default
if(light.shadow.map != null){
	light.shadow.map.dispose(); // important
light.shadow.map = null;
}
	
	renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFHardShadowMap;
  
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 50; // default
	  }
	  else if(shadows == 1){shadows = 2;
		console.log("turning on shadows...(medium)");
	  plane.receiveShadow = true;
	side1.receiveShadow = true;
	side2.receiveShadow = true;
	side3.receiveShadow = true;
	side4.receiveShadow = true; 
	
	renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFHardShadowMap;
  light.shadow.mapSize.width = 0; // default
light.shadow.mapSize.height = 128; // default
  light.shadow.mapSize.width = 128; // default

light.shadow.map.dispose(); // important
light.shadow.map = null;

plane.material.needsUpdate = true;
	side1.material.needsUpdate = true;
	side2.material.needsUpdate = true;
	side3.material.needsUpdate = true;
	side4.material.needsUpdate = true;
	light.shadow.needsUpdate = true;

	  }
	  else if(shadows == 2){shadows = 3;
		console.log("turning on shadows...(high)");
	  plane.receiveShadow = true;
	side1.receiveShadow = true;
	side2.receiveShadow = true;
	side3.receiveShadow = true;
	side4.receiveShadow = true; 
	

	renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  light.shadow.mapSize.width = 256; // default
light.shadow.mapSize.height = 256; // default
light.shadow.map.dispose(); // important
light.shadow.map = null;
plane.material.needsUpdate = true;
	side1.material.needsUpdate = true;
	side2.material.needsUpdate = true;
	side3.material.needsUpdate = true;
	side4.material.needsUpdate = true;
	  }
	  else if(shadows == 3){shadows = 4;
		console.log("turning on shadows...(very high)");
	  plane.receiveShadow = true;
	side1.receiveShadow = true;
	side2.receiveShadow = true;
	side3.receiveShadow = true;
	side4.receiveShadow = true; 
	plane.material.needsUpdate = true;
	side1.material.needsUpdate = true;
	side2.material.needsUpdate = true;
	side3.material.needsUpdate = true;
	side4.material.needsUpdate = true;

	renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.map.dispose(); // important
light.shadow.map = null;
	  }
	  else {
		shadows = false;
		console.log("turning off shadows...");
		plane.receiveShadow = false;
	side1.receiveShadow = false;
	side2.receiveShadow = false;
	side3.receiveShadow = false;
	side4.receiveShadow = false; 
	plane.material.needsUpdate = true;
	side1.receiveShadow = false;
	side2.receiveShadow = false;
	side3.receiveShadow = false;
	side4.receiveShadow = false; 
	renderer.shadowMap.enabled = false;

  light.shadow.mapSize.width = 0; // default
light.shadow.mapSize.height = 0; // default
light.shadow.map.dispose(); // important
light.shadow.map = null;

	  }
	  break;
	 
  }
	
}, false);
document.addEventListener('keyup', (event) => {
  var name = event.key;
  var code = event.code;
  switch(name){
	  case("w"): Kw = false;break;
	  case("a"): Ka = false;break;
	  case("s"): Ks = false;break;
	  case("d"): Kd = false;break;
	  case("i"): Ki = false;break;
	  case("j"): Kj = false;break;
	  case("k"): Kk = false;break;
	  case("l"): Kl = false;break;
	

	  case(" "): Kspace = false;break;
  }
	
}, false);
//#endregion			
//#region general init	
/*				
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



loader.load( './orange.ma', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
*/
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 1000 );
			const renderer = new THREE.WebGLRenderer();
		
			renderer.setSize( window.innerWidth - 10, window.innerHeight - 10 );
			document.body.appendChild( renderer.domElement );
            
			const loader = new THREE.TextureLoader();
const bgTexture = loader.load("https://i.ibb.co/C7BP2kJ/background.png");
scene.background = bgTexture;
//#endregion

//#region test cube	
	
const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
			const cube = new THREE.Mesh( geometry, material );
			cube.castShadow = true;
    
			//scene.add( cube );
			
//#endregion

//#region test arena		
const a = new THREE.PlaneGeometry( 100, 100 );
const a1 = new THREE.PlaneGeometry( 200, 200 );
const a2 = new THREE.BoxGeometry( 10, 10 );
			const b = new THREE.MeshPhongMaterial( { color: 0x0022CC } );
			const c = new THREE.MeshPhongMaterial( { color: 0xCC5500 } );
			const d = new THREE.MeshPhongMaterial( { color: 0xCC0022 } );
			const e = new THREE.MeshPhongMaterial( { color: 0xFFFF00 } );
			const f = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );

			const plane = new THREE.Mesh( a,b );
			const plane1 = new THREE.Mesh( a1,e );
			const plane2 = new THREE.Mesh( a2,f );
			const side1 = new THREE.Mesh( a1,c );
			const side2 = new THREE.Mesh( a1,c );
			const side3 = new THREE.Mesh( a1,c );
			const side4 = new THREE.Mesh( a1,c );
			
   
plane.position.y -= 2;
plane1.position.y = 16;
plane2.position.y = 14;

plane1.receiveShadow = true;
			side2.rotation.y = -Math.PI/2;
			side4.rotation.y = Math.PI/2;
			side3.rotation.y = Math.PI;
			plane.rotation.x = -Math.PI/2;
			plane1.rotation.x = Math.PI/2;
			plane2.rotation.x = Math.PI/2;
			side1.position.z = -50;
			side3.position.z = 25;
			side2.position.x = 25;
			side4.position.x = -25;
			scene.add( plane );
			scene.add( plane1 );
			scene.add( plane2 );
			scene.add( side1 );
			scene.add( side2 );
			scene.add( side3 );
			scene.add( side4 );

//#endregion
//#region lighting
const lighft = new THREE.AmbientLight( 0x404040 ); // soft
scene.add( lighft );
const color = 0xFFFFFF;
  const intensity = 0.5;
  const light = new THREE.PointLight(color, intensity);
  //const light1 = new THREE.SpotLight(0xFF0000,10,10,10);
  light.position.set(0, 5, 0);
  scene.add(light);
 // scene.add(light1);
 light.castShadow = true;
 

  
			
//#endregion
//#region player
			camera.position.set(0,1,5);
			const geometry1 = new THREE.BoxGeometry();
			const material1 = new THREE.MeshPhongMaterial( { color: 0xFF0088 } );
			const plr = new THREE.Mesh( geometry, material );
			plr.position.z = -5;
			const plrdwn = new THREE.Mesh(geometry,material);
			plrdwn.position.y = -1;
			plr.castShadow =false;


			const material2 = new THREE.MeshPhongMaterial( { color: 0xBBBBBB } );
			material2.depthTest = false;
			const material3 = new THREE.MeshBasicMaterial( { color: 0xBBFFBB } );
			const material4 = new THREE.MeshPhongMaterial( { color: 0xFFBBBB } );
			material3.depthTest = false;
			material4.depthTest = false;
			const gun = new THREE.Mesh( geometry, material2 );
			const gun1 = new THREE.Mesh( geometry, material3 );
			const gun2 = new THREE.Mesh( geometry, material4 );
			gun.castShadow = true;
			gun1.castShadow = true;
			gun.scale.set(0.5,0.7,1);
			gun1.scale.set(0.05,0.8,1.5);
			gun2.scale.set(0.6,0.6,0.7);
			gun.renderOrder = 2;
			gun1.renderOrder = 3;
			gun2.renderOrder = 1;
    
			scene.add( gun );
			scene.add( gun1 );
		
			scene.add( gun2 );
			
//#endregion
//plr projectile 

//class
class proj{
	constructor(obj,rot,fwd) {
    this.obj = obj;
	this.time = 500;
	this.rot = rot;
	this.fwd = fwd;
  }
}
let HP = 20;
let score = 0;
const hpshow = document.getElementById("displayHP");
const deathmsg = document.getElementById("deathmsg");
const scoreshow = document.getElementById("displayscore");
function OnScoreChange(){
	score ++;
	scoreshow.innerHTML = "Score: "+score;
}
function OnHPChange(){

hpshow.innerHTML = "HP:"+HP;
if(HP < 1){
plr.position.y = 256;
deathmsg.innerHTML = "You died, score: "+score+"! Reload window to try again, we are out of links.";


}
else {
	HP-= 1;
}
}
let mouse = false;
let bullets = [];

const material8 = new THREE.MeshPhongMaterial( { color: 0xFF0000 } );



let targets = [];
/*
for (let r = 0; r < 20;r++){
const cuba = new THREE.Mesh(geometry,material8);
cuba.position.y = -1;
cuba.position.x = 2**(Math.random())*30 - 40;
cuba.position.z = 2**(Math.random())*50 - 100;
cuba.castShadow = true;
targets.push(cuba);
scene.add (cuba);
}

*/
const geometry5 = new THREE.BoxGeometry();
			const material5 = new THREE.MeshBasicMaterial( { color: 0x88FF88 } );
			
		let step = 0;
		window.addEventListener("click", () =>{
			mouse = false;
			let rotFWD = -1;
let rot = -plr.rotation.y / Math.PI; let vari = Math.abs(rot);	if(vari > 0.5 &&vari < 1.5){rotFWD *= -1}

if(rot < -1){
	rot += 2;
}
else if(rot > 1){
	rot -= 2;
}
if(rot > 0.5){
 rot = 1-rot;
}
else if(rot < -0.5){
	rot = -1-rot;
}

rot *= 2;

if(rot > 0){
	rotFWD *= 1-rot;
}
else if(rot < 0){
	rotFWD *= 1+rot;
}

			
			const projectile = new THREE.Mesh( geometry5, material5 );
			projectile.castShadow = true;
			projectile.position.y = -1;
			projectile.rotation.y = plr.rotation.y;
			projectile.position.x = plr.position.x;
			projectile.position.z = plr.position.z;
			projectile.scale.set(0.1,0.1,0.1);
scene.add(projectile);
let pr = new proj(projectile,rot,rotFWD);
bullets.push(pr);

step = 1;

		});	
		
		document.addEventListener("mousedown", () =>{
				mouse = true;
		});
		
document.addEventListener("mousemove", () => {
			
				//change = event.clientX - last;
				//last = event.clientX;
				ev = event;
				
			});
function Collide(obj1,obj2,dist){
if(obj1.position.x > obj2.position.x - dist && obj1.position.x < obj2.position.x + dist && obj1.position.y > obj2.position.y - dist && obj1.position.y < obj2.position.y + dist && obj1.position.z > obj2.position.z - dist && obj1.position.z < obj2.position.z + dist){
return true;
}
return false;


	return false;
}
let Ebullets = [];
let distance = 1;
let timer = -1;
let Eclock = 0;
class Eproj{
	constructor(obj,eX,eZ) {
    this.obj = obj;
	this.time = 500;
	this.eX = eX;
	this.eZ = eZ;
  }
}
let timeC = 0;
let timeD = 0;
let timeE = 0;
let amount = 5;
let bullettime = 10;
let boost = false;
let canboost = false;
const dash = document.getElementById("displaydash");
function animate() {
				requestAnimationFrame( animate );
	console.log(timeE+","+canboost+","+boost+","+speed);
	dash.innerHTML = timeE;
	if(canboost && Kspace){
	   boost = true;
	   }
	
	if(!boost && timeE < 500){
timeE += 1;
		bullettime = 10;
	speed = 0.1;
	if(timeE > 250){
	canboost = true;
	}
}
	if(boost){
		canboost = false;
	timeE -= 15;
		bullettime = 2;
	speed = 0.1 + (timeE/250);
	
	if(timeE < 0){
	boost = false;
		
	}	
		
	}
	
	/*
	if(timeE < 50 && Kspace){
	timeE += 1;
		if(Kspace){
			speed = 0.6 + (timeE*-1);
		bullettime = 2;
		}
	
	
	}
	else if (timeE > -100){
	timeE --;
		speed = 0.06;
		bullettime = 10;
	}
	*/
	


if(timeD < 0 && mouse){
timeD = bullettime;
			
let rotFWD = -1;
let rot = -plr.rotation.y / Math.PI; let vari = Math.abs(rot);	if(vari > 0.5 &&vari < 1.5){rotFWD *= -1}

if(rot < -1){
	rot += 2;
}
else if(rot > 1){
	rot -= 2;
}
if(rot > 0.5){
 rot = 1-rot;
}
else if(rot < -0.5){
	rot = -1-rot;
}

rot *= 2;

if(rot > 0){
	rotFWD *= 1-rot;
}
else if(rot < 0){
	rotFWD *= 1+rot;
}

			
			const projectile = new THREE.Mesh( geometry5, material5 );
			projectile.castShadow = true;
			projectile.position.y = -1;
			projectile.rotation.y = plr.rotation.y;
			projectile.position.x = plr.position.x;
			projectile.position.z = plr.position.z;
			projectile.scale.set(0.1,0.1,0.1);
scene.add(projectile);
let pr = new proj(projectile,rot,rotFWD);
bullets.push(pr);

step = 1;

}
else {
	timeD--;
}
if(timeC < 0){
	timeC = 900;
	
	for (let j = 0; j < targets.length;j++){
		scene.remove(targets[j]);
		targets.splice(j,1);
		

		
		
	

}
		if(targets.length == 0){
		HP += 4;
		}
		HP += 1;
		hpshow.innerHTML = "HP:"+HP;
for (let r = 0; r < amount;r++){
const mesajarjar = new THREE.BoxGeometry(1,1);
const cuba = new THREE.Mesh(mesajarjar,material8);
cuba.position.y = 10;
cuba.position.x = 2**(Math.random())*30 - 40;
cuba.position.z = 2**(Math.random())*60 - 100;
cuba.castShadow = true;
targets.push(cuba);
scene.add (cuba);
}
amount = amount + 5;
}
else {
	timeC--;
}
	


				//plr projectiles and targets
				for (let j = 0; j < targets.length;j++){
					if(targets[j].position.y > -1){
						targets[j].position.y -= 0.1;
					}
		targets[j].rotation.x += 0.01;
		targets[j].rotation.y += 0.02;
		targets[j].rotation.z += 0.03;
	
		}
	let hit = false;
for (let i = 0; i < bullets.length; i++){
if(bullets[i].obj == null){
	bullets.pop();
}
	bullets[i].obj.position.x += 0.5*bullets[i].rot;
	bullets[i].obj.position.z += 0.5*bullets[i].fwd;
	bullets[i].time --;
	if(bullets[i].time < 0){
		scene.remove(bullets[i].obj);
		bullets.splice(i,1);
		step = 0;
	}
	for (let j = 0; j < targets.length;j++){
	
		if(Collide(bullets[i].obj,targets[j],distance)){
		
			
			step = 0;
			OnScoreChange();
			scene.remove(bullets[i].obj);
			scene.remove(targets[j]);
			targets.splice(j,1);
			bullets.splice(i,1);
	
			break;
			
		}

	}

	
}
if(timer < 0){
	timer = 10;
	if(step > 0){

	switch(step){
	
		case(1): document.getElementById("cursor").innerHTML = "(-<-[X]->-)";step++;break;
		case(2): document.getElementById("cursor").innerHTML = "(<--[X]-->)";step++;break;
		case(3): document.getElementById("cursor").innerHTML = "(--<[X]>--)";step = 1;break;
	}
	

}
}
else {

	timer--;
}

plrdwn.position.x = plr.position.x;
plrdwn.position.z = plr.position.z;
for (let i = 0; i < Ebullets.length;i++){

Ebullets[i].obj.position.x += 0.006* Ebullets[i].eX;
Ebullets[i].obj.position.z += 0.006* Ebullets[i].eZ;
Ebullets[i].time --;
if(Ebullets.time < 0){
	scene.remove(Ebullets[i].obj);
	Ebullets.splice(i,1);
}


if(Collide(Ebullets[i].obj,plrdwn,distance+0.6) && !boost){

	scene.remove(Ebullets[i].obj);
	Ebullets.splice(i,1);
	OnHPChange();
}
}


//target projectiles
if(Eclock < 0){
Eclock = 100;

	for(let i = 0; i < targets.length;i++){	
		const material10 = new THREE.MeshBasicMaterial(0xFFFFFF);
		const bullet = new THREE.Mesh( geometry5, material10 );
			bullet.castShadow = true;
			bullet.position.y = targets[i].position.y;
			bullet.position.x = targets[i].position.x;
			bullet.position.z = targets[i].position.z;
			bullet.scale.set(0.1,0.1,0.1);
			scene.add(bullet);
			const buit = new Eproj(bullet,(plr.position.x+(Math.random()*15-2)) - targets[i].position.x,(plr.position.z+(Math.random()*15 - 2)) - targets[i].position.z);
			Ebullets.push(buit);
			/*
		if(targets[i].position.x > plr.position.x){
			if(targets[i].position.z > plr.position.z){
			
				const buit = new Eproj(bullet,1,1);
				Ebullets.push(buit);
				
				
			}
		}
		if(targets[i].position.x < plr.position.x){
			if(targets[i].position.z > plr.position.z){
			
				const buit = new Eproj(bullet,-1,1);
				Ebullets.push(buit);
				
				
			}
		}
		if(targets[i].position.x > plr.position.x){
			if(targets[i].position.z < plr.position.z){
			
				const buit = new Eproj(bullet,1,-1);
				Ebullets.push(buit);
				
				
			}
		}
		if(targets[i].position.x < plr.position.x){
			if(targets[i].position.z < plr.position.z){
			
				const buit = new Eproj(bullet,-1,-1);
				Ebullets.push(buit);
			
				
			}
		}*/
	}

}
else {
	Eclock --;
}
//camera to player
camera.position.x = plr.position.x;
camera.position.y = plr.position.y;
camera.position.z = plr.position.z;
camera.rotation.x = plr.rotation.x;
camera.rotation.y = plr.rotation.y;
camera.rotation.z = plr.rotation.z;




/*
let rot = camera.rotation.y / (2 *Math.PI);
			if(Math.abs(camera.rotation.y) > 2 * Math.PI){
				camera.rotation.y = 0;
			}
console.log(rot);
*/
if(Math.abs(plr.rotation.y) > 2 * Math.PI){
				plr.rotation.y = 0;
			}
			let rotFWD = 1;
let rot = plr.rotation.y / Math.PI; let vari = Math.abs(rot);	if(vari > 0.5 &&vari < 1.5){rotFWD *= -1}

if(rot < -1){
	rot += 2;
}
else if(rot > 1){
	rot -= 2;
}
if(rot > 0.5){
 rot = 1-rot;
}
else if(rot < -0.5){
	rot = -1-rot;
}

rot *= 2;

if(rot > 0){
	rotFWD *= 1-rot;
}
else if(rot < 0){
	rotFWD *= 1+rot;
}


//rot used for AD
//rotFWD used for WS
				let directx = 0;
				let directz = 0;

				//collisions?!
				/*
				if(Kw){
					camera.position.z -= 0.1*rotFWD;
					
				}
				if(Ka){
					camera.position.x -= 0.1*rot;
					
				}
				if(Ks){
					camera.position.z += 0.1*rotFWD;
					
				}
				if(Kd){
					camera.position.x += 0.1*rot;
					
				}
				*/
				let absZ = 0;
				let absX = 0;
				if(plr.position.z < side1.position.z+0.5){
			
					
						absZ = -1;
					
				}
				else if(plr.position.z > side3.position.z-0.5){
			
					
					absZ = 1;
				
					}
			else {
				absZ = 0;
			}

			if(plr.position.x > side2.position.x-0.5){
			
					
			absX = -1;
		
			}
			else if(plr.position.x < side4.position.x+0.5){

		
				absX = 1;
	
				}
				else {
					absX = 0;
					 }
				/*
				if(plr.position.z < side3.position.z){
					if(rotFWD < 0){
						rotFWD = 0;
					}
				}
				if(plr.position.x > side2.position.x){
					if(rot > 0){
						rot = 0;
					}
				}
				if(plr.position.x < side4.position.x){
					if(rot < 0){
						rot = 0;
					}
				}
				*/
				if(Kw){
					if(absZ == -1){
						
						if(rotFWD <= 0){
							
plr.position.z -= speed*rotFWD;
					}
					}
					else if(absZ == 1){
						if(rotFWD >= 0){
plr.position.z -= speed*rotFWD;
					}
					}
					else{
						plr.position.z -= speed*rotFWD;
					}
					
					if(absX == -1){
						
						if(rot >= 0){
							
plr.position.x -= 0.1*rot;
					}
					}
					else if(absX == 1){
						if(rot <= 0){
plr.position.x -= speed*rot;
					}
					}
					else{
						plr.position.x -= speed*rot;
					}
				
					
				}
				if(Kd){
					if(absZ == -1){
						if(rot <= 0){
						
							plr.position.z -= speed*rot;
					}
					}
					else if(absZ == 1){
						if(rot >= 0){
							plr.position.z -= speed*rot;
					}
					}
					else{
						plr.position.z -= speed*rot;
					}


					if(absX == -1){
						if(rotFWD <= 0){
						
							plr.position.x += speed*rotFWD;
					}
					}
					else if(absX == 1){
						if(rotFWD >= 0){
							plr.position.x += speed*rotFWD;
					}
					}
					else{
						plr.position.x += speed*rotFWD;
					}

				
			
					
				}
				if(Ks){
					if(absZ == -1){
						if(rotFWD >= 0){
					
plr.position.z += speed*rotFWD;
					}
					}
					else if(absZ == 1){
						if(rotFWD <= 0){
plr.position.z += speed*rotFWD;
					}
					}
					else{
						plr.position.z += speed*rotFWD;
					}


					if(absX == -1){
						if(rot <= 0){
					
plr.position.x += speed*rot;
					}
					}
					else if(absX == 1){
						if(rot >= 0){
plr.position.x += speed*rot;
					}
					}
					else{
						plr.position.x += speed*rot;
					}
					
			
					
				}
				if(Ka){
					if(absZ == -1){
						if(rot >= 0){
						
							plr.position.z += speed*rot;
					}
					}
					else if(absZ == 1){
						if(rot <= 0){
							plr.position.z += speed*rot;
					}
					}
					else{
						plr.position.z += speed*rot;
					}

					if(absX == -1){
						if(rotFWD >= 0){
						
							plr.position.x -= speed*rotFWD;
					}
					}
					else if(absX == 1){
						if(rotFWD <= 0){
							plr.position.x -= speed*rotFWD;
					}
					}
					else{
						plr.position.x -= speed*rotFWD;
					}

				
				
					
				}

				
/*
				if(Ki){
					camera.rotation.x += 0.01;
				}
				if(Kk){
					camera.rotation.x -= 0.01;
				}
				*/
				if(Kj){
					plr.rotation.y += 0.02;
				}
				if(Kl){
					plr.rotation.y -= 0.02;
				}
				



				//camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, (mouse.x * Math.PI) / 10, 0.1);
				//camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, (mouse.y * Math.PI) / 10, 0.1);
				gun.position.x = plr.position.x  - rot;
gun.position.y = plr.position.y - 1;
gun.position.z = plr.position.z - rotFWD;
gun.rotation.x = plr.rotation.x;
gun.rotation.y = plr.rotation.y;
gun.rotation.z = plr.rotation.z;


gun1.position.x = gun.position.x;
gun1.position.y = gun.position.y;
gun1.position.z = gun.position.z;
gun1.rotation.x = gun.rotation.x;
gun1.rotation.y = gun.rotation.y;
gun1.rotation.z = gun.rotation.z;
gun2.position.x = gun.position.x;
gun2.position.y = gun.position.y;
gun2.position.z = gun.position.z;
gun2.rotation.x = gun.rotation.x;
gun2.rotation.y = gun.rotation.y;
gun2.rotation.z = gun.rotation.z;
				//mouse
				change = ev.clientX - last;
				last = ev.clientX;
			plr.rotation.y -= change/50;
			change /= 5;
				//cube.rotation.x += 0.01;
				//cube.rotation.y += 0.01;
				renderer.render( scene, camera );
			};
			animate();
