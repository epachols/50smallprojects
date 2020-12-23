const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.9, Math.PI / 2.25, 95, new BABYLON.Vector3(15, 15, -10));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 2, 0.25));


    
    // materials:: 
    var sphere = BABYLON.Mesh.CreateGround("ground", 500, 500, 190, scene);

	// Lava Material creation
	var lavaMaterial = new BABYLON.LavaMaterial("lava", scene);	
	lavaMaterial.noiseTexture = new BABYLON.Texture("textures/lava/cloud.png", scene); // Set the bump texture
	lavaMaterial.diffuseTexture = new BABYLON.Texture("textures/lava/lavatile.jpg", scene); // Set the diffuse texture
	lavaMaterial.speed = .05;
	lavaMaterial.fogColor = new BABYLON.Color3(0.45, 0.15, 0.15);
    // lavaMaterial.unlit = true;
	sphere.material = lavaMaterial;



    // Skybox meshed
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:300.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.disableLighting = true;
	skybox.material = skyboxMaterial;	

    
    // ===========================base=============================
    const baseMat = new BABYLON.StandardMaterial("baseMat");
    baseMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50734389556_6b5a8a7723_c.jpg", scene);
    
    const base = BABYLON.MeshBuilder.CreateBox("base", {});
    base.material = baseMat;
    base.position.y = 5;
    base.position.x = 10;
    base.position.z = -15;
    base.scaling = new BABYLON.Vector3(65, 15, 40);

    // ===========================base/END=============================
    
    //======================CASTLE--------------------------------------------------
    const firstFloorMat = new BABYLON.StandardMaterial("firstFloorMat");
    firstFloorMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50734914921_1e98e703f0_c.jpg", scene);
    const secondFloorMat = new BABYLON.StandardMaterial("secondFloorMat");
    secondFloorMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50735021397_95bb7bf56c_c.jpg", scene);
    const topFloorMat = new BABYLON.StandardMaterial("topFloorMat");
    topFloorMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50734184658_47d2dbcf8e_c.jpg", scene);
    const crenelMat = new BABYLON.StandardMaterial("crenelMat");
    crenelMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50744830268_ff7f5ebb2c_w.jpg", scene);

    castleFloorfaceUV = [];
    castleFloorfaceUV[0] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //rear face
    castleFloorfaceUV[1] = new BABYLON.Vector4(0.6, 0.0, 1, 1.0); //front face
    castleFloorfaceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
    castleFloorfaceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    castleFloorfaceUV[4] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //top side
    castleFloorfaceUV[5] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //bottom side

    const castleFirstFloor = BABYLON.MeshBuilder.CreateBox("firstfloor", {faceUV: castleFloorfaceUV, wrap: true});
    castleFirstFloor.material = firstFloorMat;
    castleFirstFloor.scaling = new BABYLON.Vector3(39, 12, 20);
    castleFirstFloor.position.x = 15;
    castleFirstFloor.position.y = 18.5;
    castleFirstFloor.position.z = -12;

    const castleSecondFloor = BABYLON.MeshBuilder.CreateBox("secondfloor", {faceUV: castleFloorfaceUV, wrap: true});
    castleSecondFloor.material = secondFloorMat;
    castleSecondFloor.scaling = new BABYLON.Vector3(28, 10, 13);
    castleSecondFloor.position.x = 15;
    castleSecondFloor.position.y = 28;
    castleSecondFloor.position.z = -12;

    const castleTopFloor = BABYLON.MeshBuilder.CreateBox("topfloor", {faceUV: castleFloorfaceUV, wrap: true});
    castleTopFloor.material = topFloorMat;
    castleTopFloor.scaling = new BABYLON.Vector3(20, 8, 8.3);
    castleTopFloor.position.x = 15;
    castleTopFloor.position.y = 37;
    castleTopFloor.position.z = -12;

    const crenel = BABYLON.MeshBuilder.CreateBox('crenel', {size: 2});
    crenel.material = crenelMat;
    crenel.rotation.y = -Math.PI / 2;
    crenel.position.x = 5.8;
    crenel.position.y = 42;
    crenel.position.z = -9;
    crenel.scaling = new BABYLON.Vector3(1, 1, 0.7);

    const places = []; //each entry is an array [rotation, x, y, z];
    //top tier
    const topCrenels = [[0, 10.5, 42, -8.5],[0, 15.2, 42, -8.5],[0, 20, 42, -8.5],[-Math.PI / 2, 24.2, 42, -9],[-Math.PI / 2, 5.8, 42, -15],[0, 10.5, 42, -15.5],[0, 15.2, 42, -15.5],[0, 20, 42, -15.5],[-Math.PI / 2, 24.2, 42, -15]];
    places.push(...topCrenels);
    //mid
    const secondCrenels = [[-Math.PI /2, 1.8, 34, -6.2],[-Math.PI /2, 1.8, 34, -12],[-Math.PI /2, 1.8, 34, -17.4],[-Math.PI /2, 28.1, 34, -6.2],[-Math.PI /2, 28.1, 34, -12],[-Math.PI /2, 28.1, 34, -17.4],[0, 6, 34, -6.2],[0, 11, 34, -6.2],[0, 17, 34, -6.2],[0, 23, 34, -6.2],[0, 6, 34, -17.8],[0, 11, 34, -17.8],[0, 17, 34, -17.8],[0, 23, 34, -17.8]];
    places.push(...secondCrenels);
    //bottom
    const firstCrenels = [[-Math.PI /2, -4, 25, -3],[-Math.PI /2, -4, 25, -8.5],[-Math.PI /2, -4, 25, -15],[-Math.PI /2, -4, 25, -21],[-Math.PI /2, 33.8, 25, -3],[-Math.PI /2, 33.8, 25, -8.5],[-Math.PI /2, 33.8, 25, -15],[-Math.PI /2, 33.8, 25, -21],[0, 15.7, 25, -2.7],[0, 0.6, 25, -2.7],[0, 5.5, 25, -2.7],[0, 10.3, 25, -2.7],[0, 20.8, 25, -2.7],[0, 25.4, 25, -2.7],[0, 30, 25, -2.7],[0, 15.7, 25, -21],[0, 0.6, 25, -21],[0, 5.5, 25, -21],[0, 10.3, 25, -21],[0, 20.8, 25, -21],[0, 25.4, 25, -21],[0, 30, 25, -21]];
    places.push(...firstCrenels);

    const crenellations = [];
    for (let i = 0; i< places.length; i++) {
        crenellations[i] = crenel.createInstance("crenellate" + i);
        crenellations[i].rotation.y = places[i][0];
        crenellations[i].position.x = places[i][1];
        crenellations[i].position.y = places[i][2];
        crenellations[i].position.z = places[i][3];
    }

    return scene;
}


    // ============================water and ground====================
    // // Water
	// var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 2048, 2048, 16, scene, false);
	// var water = new BABYLON.WaterMaterial("water", scene, new BABYLON.Vector2(512, 512));
	// water.backFaceCulling = true;
	// water.bumpTexture = new BABYLON.Texture("textures/waterbump.png", scene);
	// water.windForce = 10;
	// water.waveHeight = 1.2;
	// water.bumpHeight = 0.1;
	// water.windDirection = new BABYLON.Vector2(1, 1);
	// water.waterColor = new BABYLON.Color3(0, 0, 221 / 255);
	// water.colorBlendFactor = 0.2;
	// water.addToRenderList(skybox);
	// waterMesh.material = water;	
	

    // // GROUND creation
    // var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMapTriPlanar.png", 500, 200, 550, 30, 11, scene, false);
	// var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
	// groundMaterial.diffuseTexture = new BABYLON.Texture("textures/rock.png", scene);
	// groundMaterial.diffuseTexture.uScale = 50;
	// groundMaterial.diffuseTexture.vScale = 10;
	// groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	// ground.position.y = -15.25;
    // ground.scaling = new BABYLON.Vector3(1, 1, 2);
	// ground.material = groundMaterial;

   // ============================water and ground/END===================

    // 	// Sky material
	// var skyboxMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
    // skyboxMaterial.backFaceCulling = false;
	// //skyboxMaterial._cachedDefines.FOG = true;

	// // Sky mesh (box)
    // var skybox = BABYLON.Mesh.CreateBox("skyBox", 800.0, scene);
    // skybox.material = skyboxMaterial;
	
	// /*
	// * Keys:
	// * - 1: Day
	// * - 2: Evening
	// * - 3: Increase Luminance
	// * - 4: Decrease Luminance
	// * - 5: Increase Turbidity
	// * - 6: Decrease Turbidity
    // * - 7: Move horizon to -50
    // * - 8: Restore horizon to 0
	// */
	// var setSkyConfig = function (property, from, to) {
	// 	var keys = [
    //         { frame: 0, value: from },
	// 		{ frame: 100, value: to }
    //     ];
		
	// 	var animation = new BABYLON.Animation("animation", property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
	// 	animation.setKeys(keys);
		
	// 	scene.stopAnimation(skybox);
	// 	scene.beginDirectAnimation(skybox, [animation], 0, 1000, false, 1);
	// };
	
	// window.addEventListener("keydown", function (evt) {
	// 	switch (evt.keyCode) {
	// 		case 49: setSkyConfig("material.inclination", skyboxMaterial.inclination, 0); break; // 1
	// 		case 50: setSkyConfig("material.inclination", skyboxMaterial.inclination, -0.5); break; // 2

	// 		case 51: setSkyConfig("material.luminance", skyboxMaterial.luminance, 0.1); break; // 3
	// 		case 52: setSkyConfig("material.luminance", skyboxMaterial.luminance, 1.0); break; // 4
			
	// 		case 53: setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 40); break; // 5
	// 		case 54: setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 5); break; // 6
			
    //         case 55: setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 50); break; // 7
    //         case 56: setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 0); break;  // 8
	// 		default: break;
	// 	}
    // });
	
	// // Set to Day
	// setSkyConfig("material.inclination", skyboxMaterial.inclination, 0);