//tests the main menu

window.onload = function() {
        game = new Phaser.Game(800, 600, Phaser.AUTO, 'prototype', { preload: preload, create: create, update: update});
        game.currentMode = 'mainMenu';


	function preload () {
           //The preload function should contain code to handle the loading of assets by your game 
           game.load.image('background', 'Assets/Art/World/PixelMarsFloor.png');
           game.load.image('background2', 'Assets/Art/World/PixelMarsFloor2.png');
           game.load.image('background3', 'Assets/Art/World/CaveFloor.png');
           game.load.image('player', 'Assets/Art/Rover/Rover_proto.png');
		   game.load.image('player_solar', 'Assets/Art/Rover/Rover-Solar.png')
		   //game.load.image('dead_rover', 'Assets/Art/Rover/Rover_Dead.png');
		   //music
           game.load.audio('Dusty', 'Assets/Sounds/Dusty_cktr.mp3');
		   //game.load.audio('Dunes', 'Assets/Sounds/Dunes_cktr.WAV');
		   
		   //menu
           game.load.image('paused_txt', 'Assets/Art/Menu/Paused_text.png');
           game.load.image('play_txt', 'Assets/Art/Menu/Resume_text.png');
           game.load.image('quit_txt', 'Assets/Art/Menu/Exit_text.png');
		   
		   //HUD Stuff
		   preload_HUD(game);
		
		   loadObjects(game);
		   loadHazards(game);
	}
	function create () {
	   createMainMenu();
    }

	function update(){
	   updateMainMenu();
       updateGameScene();
	}
	/*
	function render(){
		   //game.debug.inputInfo(32, 32);
    
    game.debug.pointer( game.input.activePointer );
	}
	*/
};
