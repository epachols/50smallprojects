const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -14.171, 1.1096, 75.4364, new BABYLON.Vector3(6.13, 14.79, -9.68));
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;  
    camera.upperBetaLimit = 1.5904;
    camera.lowerRadiusLimit = 50.12;
    camera.upperRadiusLimit = 153;
    camera.fov = 1.12;
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
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:800.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.disableLighting = true;
	skybox.material = skyboxMaterial;	

    // ===========================base================================================
    const baseMat = new BABYLON.StandardMaterial("baseMat");
    baseMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50734389556_6b5a8a7723_c.jpg", scene);
    
    const base = BABYLON.MeshBuilder.CreateBox("base", {});
    base.material = baseMat;
    base.position.y = 5;
    base.position.x = 10;
    base.position.z = -15;
    base.scaling = new BABYLON.Vector3(65, 15, 40);

    // ===========================base/END=============================================

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-world-pipe=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
     const pipeMaterial = new BABYLON.StandardMaterial("pipeMat", scene);
	pipeMaterial.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50746209997_21cfac4fbf_w.jpg");
    const pipeFaceUV = [];
	pipeFaceUV[0] =	new BABYLON.Vector4(0, 0, 0, 0);
    pipeFaceUV[1] =	new BABYLON.Vector4(1, 0, 0.25, 1); // x, z swapped to flip image
    pipeFaceUV[2] = new BABYLON.Vector4(0, 0, 0.24, 1);
	
    const faceColors = [ ];
    faceColors[0] = new BABYLON.Color4(0.5, 0.5, 0.5, 1)
	
	const pipe = BABYLON.MeshBuilder.CreateCylinder("pipe", {height:1.16, faceUV: pipeFaceUV, faceColors: faceColors});
	pipe.material = pipeMaterial;
    pipe.scaling = new BABYLON.Vector3(4,4,4);
    pipe.position = new BABYLON.Vector3(37, 15, -29);

	const pipeTop = BABYLON.MeshBuilder.CreateCylinder("pipeTop", {height:0.5, diameter: 1.25, faceUV: pipeFaceUV, faceColors: faceColors});
	pipeTop.material = pipeMaterial;
    pipeTop.scaling = new BABYLON.Vector3(4,4,4);
    pipeTop.position = new BABYLON.Vector3(37, 17, -29);
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-world-pipe/END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    //-------------------Question Blocks---------------------------------------------
    const questMat = new BABYLON.StandardMaterial("questMat");
    questMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50734493967_793dacf5e2_w.jpg", scene);

    const questBlock = BABYLON.MeshBuilder.CreateBox("quest", {size: 3});
    questBlock.material = questMat;
    questBlock.position.x = -20;
    questBlock.position.y = 25;
    questBlock.position.z = -25;

    const questClone = questBlock.clone("clonedQuest");
    questClone.position.x = -25;
    const questClone1 = questBlock.clone("clonedQuest1");
    questClone1.position.x = -30;
    //-------------------Question Blocks---------------------------------------------
    


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
    crenel.position.y = 41.8;
    crenel.position.z = -9;
    crenel.scaling = new BABYLON.Vector3(1, 0.8, 0.7);

    const places = []; //each entry is an array [rotation, x, y, z];
    //top tier
    const topCrenels = [[0, 10.5, 41.8, -8.5],[0, 15.2, 41.8, -8.5],[0, 20, 41.8, -8.5],[-Math.PI / 2, 24.2, 41.8, -9],[-Math.PI / 2, 5.8, 41.8, -15],[0, 10.5, 42, -15.5],[0, 15.2, 41.8, -15.5],[0, 20, 41.8, -15.5],[-Math.PI / 2, 24.2, 41.8, -15]];
    places.push(...topCrenels);
    //mid


    const secondCrenels = [[-Math.PI /2, 1.8, 33.8, -6.2],[-Math.PI /2, 1.8, 33.8, -12],[-Math.PI /2, 1.8, 33.8, -17.4],[-Math.PI /2, 28.1, 33.8, -6.2],[-Math.PI /2, 28.1, 33.8, -12],[-Math.PI /2, 28.1, 33.8, -17.4],[0, 6, 33.8, -6.2],[0, 11, 33.8, -6.2],[0, 17, 33.8, -6.2],[0, 23, 33.8, -6.2],[0, 6, 33.8, -17.8],[0, 11, 33.8, -17.8],[0, 17, 33.8, -17.8],[0, 23, 33.8, -17.8]];
    places.push(...secondCrenels);




    //bottom
    const firstCrenels = [[-Math.PI /2, -4, 25.25, -3],[-Math.PI /2, -4, 25.25, -8.5],[-Math.PI /2, -4, 25.25, -15],[-Math.PI /2, -4, 25.25, -21],[-Math.PI /2, 33.8, 25.25, -3],[-Math.PI /2, 33.8, 25.25, -8.5],[-Math.PI /2, 33.8, 25.25, -15],[-Math.PI /2, 33.8, 25.25, -21],[0, 15.7, 25.25, -2.7],[0, 0.6, 25.25, -2.7],[0, 5.5, 25.25, -2.7],[0, 10.3, 25.25, -2.7],[0, 20.8, 25.25, -2.7],[0, 25.4, 25.25, -2.7],[0, 30, 25.25, -2.7],[0, 15.7, 25.25, -21],[0, 0.6, 25.25, -21],[0, 5.5, 25.25, -21],[0, 10.3, 25.25, -21],[0, 20.8, 25.25, -21],[0, 25.4, 25.25, -21],[0, 30, 25.25, -21]];
    places.push(...firstCrenels);

    const crenellations = [];
    for (let i = 0; i< places.length; i++) {
        crenellations[i] = crenel.createInstance("crenellate" + i);
        crenellations[i].rotation.y = places[i][0];
        crenellations[i].position.x = places[i][1];
        crenellations[i].position.y = places[i][2];
        crenellations[i].position.z = places[i][3];
    }
    //======================CASTLE/end--------------------------------------------------


    //--------------------------------------FlagpoleGoal-----------------------------------
    const levelMat = new BABYLON.StandardMaterial("levelMat");
    levelMat.diffuseTexture = new BABYLON.Texture("https://live.staticflickr.com/65535/50746063547_f83d319baf_w.jpg", scene) 
    const poleMat = new BABYLON.StandardMaterial("poleMat");
    poleMat.diffuseColor = new BABYLON.Color3(0.8,0.8,1);

    const flagBase = new BABYLON.MeshBuilder.CreateBox("flagBase", scene);
    flagBase.material = levelMat;
    flagBase.scaling = new BABYLON.Vector3(3,3,3);
    flagBase.position = new BABYLON.Vector3(-10.5, 14, -21);

    const flagPole = new BABYLON.MeshBuilder.CreateCylinder("flagPole", {height: 22, diameter: 0.75}, scene);
    flagPole.material = poleMat;
    flagPole.position = new BABYLON.Vector3(-10.5, 25, -21);

    const flagTop = new BABYLON.MeshBuilder.CreateSphere("flagPoleTop", {diameter: 1.5}, scene);
    const flagTopMat = new BABYLON.StandardMaterial("flagTopMat");
    flagTopMat.diffuseColor = new BABYLON.Color3(0.06, 0.59, 0.06);
    flagTop.material = flagTopMat;
    flagTop.position = new BABYLON.Vector3(-10.5, 36.5, -21);


    flagFaceUV = [];
    flagFaceUV[0] = new BABYLON.Vector4(0.5,0,1,1); //front
    flagFaceUV[1] = new BABYLON.Vector4(0,0,0.5,1); //rear

    const victoryFlag = new BABYLON.MeshBuilder.CreateBox("victoryFlag", {height: 3, width: 3, faceUV: flagFaceUV, depth:0.00000001}, scene);
    const victoryFlagMat = new BABYLON.StandardMaterial("victoryFlagMat");
    victoryFlagMat.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/4aKpdEk.png");
    victoryFlagMat.diffuseTexture.hasAlpha = true;
    victoryFlagMat.backFaceCulling = true;
    victoryFlag.material = victoryFlagMat;
    victoryFlag.position = new BABYLON.Vector3(-12.25, 34, -21);  
    //--------------------------------------FlagpoleGoal/END-----------------------------------



    return scene;
}








//     // ============================water and ground====================
//     // Water
// 	var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 2048, 2048, 16, scene, false);
// 	var water = new BABYLON.WaterMaterial("water", scene, new BABYLON.Vector2(512, 512));
// 	water.backFaceCulling = true;
// 	water.bumpTexture = new BABYLON.Texture("textures/waterbump.png", scene);
// 	water.windForce = 10;
// 	water.waveHeight = 1.2;
// 	water.bumpHeight = 0.1;
// 	water.windDirection = new BABYLON.Vector2(1, 1);
// 	water.waterColor = new BABYLON.Color3(0, 0, 221 / 255);
// 	water.colorBlendFactor = 0.2;
// 	water.addToRenderList(skybox);
// 	waterMesh.material = water;	
	

//     // GROUND creation
//     var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMapTriPlanar.png", 500, 200, 550, 30, 11, scene, false);
// 	var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
// 	groundMaterial.diffuseTexture = new BABYLON.Texture("textures/rock.png", scene);
// 	groundMaterial.diffuseTexture.uScale = 50;
// 	groundMaterial.diffuseTexture.vScale = 10;
// 	groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
// 	ground.position.y = -15.25;
//     ground.scaling = new BABYLON.Vector3(1, 1, 2);
// 	ground.material = groundMaterial;

//    // ============================water and ground/END===================

