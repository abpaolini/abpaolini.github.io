/********************************************
******************DONT USE*******************
*********************************************

loading can be done in main.js

everything else previously in CKTR_main.js is now in gameScene.js











 
window.onload = function() {

	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'prototype', { preload: preload, create: create, update: update });

	function preload () {
	//The preload function should contain code to handle the loading of assets by your game 
		game.load.image('background', 'Assets/Art/PixelMarsFloor.png');
		game.load.image('player', 'Assets/Art/Rover/Rover_proto.png');
		
		game.load.audio('Dusty', 'Assets/Sounds/Dusty_cktr.WAV');
		game.load.audio('Dunes', 'Assets/Sounds/Dunes_cktr.WAV');
		
	//HUD Stuff
		preload_HUD(game);
		
		loadObjects(game);
	}


var player;
var cursors;
var Tunes;


	function create () {
	//called automatically once the preload has finished
	//create sprites, particles and anything else you need that may use assets the preload has loaded for you
	//Typically this function would contain the bulk of your set-up code, creating game objects and the like.
        game.add.tileSprite(0, 0, 1920, 1920, 'background');
	    game.world.setBounds(0, 0, 1920, 1920);
	    var rubble = game.add.sprite(80, 85, 'rubble');
	    rubble.scale.setTo(0.1, 0.1);
         //  We're going to be using physics, so enable the Arcade Physics system
    	//game.physics.startSystem(Phaser.Physics.ARCADE);
    	//game.add.tileSprite(0, 0, 1920, 1920, 'background');
    	startArcade(game);
    	startP2Collision(game);
    	//var rubble = game.add.sprite(395, 85, 'rubble');
	    //rubble.scale.setTo(0.1, 0.1);
    	 var playerCollision = game.physics.p2.createCollisionGroup();
	    var wallCollisionGroup = game.physics.p2.createCollisionGroup();
        //game.world.setBounds(0, 0, 1920, 1920);
        //The actual rover will be made of separate objects,
        //we put them all in a group so they all act together.
        //This next function will also create the body for each sprite in the group.
        
        createWalls(game, playerCollision, wallCollisionGroup);
        //Player_group = game.add.group(game.world, 'Player_group', true, true, Phaser.Physics.ARCADE);
    	
		//Player_group.scale.set(0.5,0.5);
		//Player_group.x = game.world.centerX;
		//Player_group.y = game.world.centerY;
        
        //Create the Rover_proto body in the Player group
        //Rover_proto = Player_group.create(0, 0, 'Rover_proto');
        //Rover_proto.body.collideWorldBounds = true;
        //Rover_proto.scale.setTo(0.35, 0.35);
        //Rover_proto.anchor.setTo(0.5,0.5);
		
		//set up the controls
		//populates the cursors object with properties up, down, left, and right,
		//all instances of Phaser.Key objects.
		
		//Now we poll these in our update loop
		//MakeWalls(game);
		player = game.add.sprite(300, 400, 'player');
		player.scale.setTo(0.2, 0.2);
		game.physics.p2.enable(player, false);
		
		player.body.setCollisionGroup(playerCollision);
		player.body.collides(wallCollisionGroup);
		cursors = game.input.keyboard.createCursorKeys();
		//MakePowerUps(game);
		//MakeUpgradeGroup(game);
		//MakeSolarPowerUp(game);
		//Sounds Stuff
		Tunes = game.add.audio('Dusty');
		Tunes.loop = true;
		//Tunes.play();
		game.camera.follow(player);
		
		//HUD
		create_HUD(game);
}

	function update(){
		//upgradeCollision(game, Rover_proto, powerUps);
		//This is where you'd poll for input to move a player, check for object collision, etc.
		//The heart of your game.
		//wallCollision(game, Rover_proto, walls);
		//calling function for Rover controls
		//Found in Controls.js
		MovePlayer(player, cursors, game);
		
		//HudStuff
		//collision_damage(player.velocity, HP, game, player, walls);
		objective_description(Mish_1);
		minimap(player, game);
	}

};
*/