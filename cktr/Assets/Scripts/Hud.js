/**
 * @author Tyler
 */
//Hud.js

//var space = game.input.keyboard.addKey(32);
//space.onDown.add(charge);
function preload_HUD(game){
	game.load.image('Map', 'Assets/Art/HUD/Map2_CKtR.png');
	game.load.image('Battery', 'Assets/Art/HUD/HP2_CKtR.png');
	game.load.image('Pointer', 'Assets/Art/HUD/Pointer_CKtR.png');
	game.load.image('terminal', 'Assets/Art/HUD/Terminal_CKtR.png');
}

var Battery;
var pointer;
var Map;
var MishDisplay_title = '';
var MishDisplay_dscr;
var HPdis;
var Mish_1 = {
	title:"Find Solar Panels:",
	dscr:"They're over there dude! Drive over and pick them up!"
};
var terminal;
var HP = 100;

function create_HUD(game){
	//Fonts
	var font = {font: "16px Arial", fill: "#00FF00", align: 'left'};
	var font_Main = {font: "20px Arial", fill: "#00FF00", align: 'left', wordWrap: true, wordWrapWidth:176};
	var font_Sec = {font: "12px Arial", fill: "#00FF00", align: 'left', wordWrap: true, wordWrapWidth:176};
	//HP
	Battery = game.add.sprite(30,30, 'Battery');
	Battery.fixedToCamera = true;
	Battery.anchor.set(0.5,0.5);	
	HPdis = game.add.text(10,21, HP + "%", font);
	HPdis.fixedToCamera = true;
    	//game.load.bitmapFont('cyberPunk', 'Assets/Fonts/cyberpunk.png', 'Assets/Fonts/cyberpunk.fnt');
    //Map
	Map = game.add.sprite(10,500, 'Map');
	Map.fixedToCamera = true;
	pointer = game.add.sprite(26,522, 'Pointer');
	pointer.fixedToCamera = true;
	pointer.cameraOffset.setTo(Map.x + Map.width / 2, Map.y + Map.height/ 2);
	pointer.anchor.setTo(0.5,0.5);
	pointer.x = (Map.x + Map.width / 2);
	pointer.y = (Map.y + Map.height/ 2);
	//INcoming Mission Logs
	terminal = game.add.sprite(610, -40, 'terminal');
	terminal.fixedToCamera = true;
	terminal.scale.setTo(2,2);
	MishDisplay_title = game.add.text(615,10, "" , font_Main);
	MishDisplay_title.fixedToCamera = true;
	MishDisplay_title.cameraOffset.setTo(620, 10);
	MishDisplay_dscr = game.add.text(610,40, "" , font_Sec);
	MishDisplay_dscr.fixedToCamera = true;
	MishDisplay_dscr.cameraOffset.setTo(625, 40);
	/*MishDisplay_Main.x = (terminal.x + 70);
	MishDisplay_Main.y = (terminal.y + 50);
	MishDisplay_Sec.x = (terminal.x + 14);
	MishDisplay_Sec.y = (terminal.y + 80);*/
}
/*
=======

>>>>>>> 6689851110fa2e104777397ad13cdfe5744caec7
function collision_damage(velocity, hp, game, player, wall){
	var temp = velocity;
	if(startP2Collision(game)){
		hp = hp - 10;
		HPdis.setText(hp + "%");
		console.log('hit something');
	}
	else{
<<<<<<< HEAD
		HPdis.setText(hp + "%");
	}
	
}
*/

function drain_battery(player, game){
	var W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var A =  game.input.keyboard.addKey(Phaser.Keyboard.A);
    var S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var D = game.input.keyboard.addKey(Phaser.Keyboard.D);
	//if(player.solar == false){
		//For all intents and purposes, HP stands for Battery Power
		if(W.isDown || A.isDown || S.isDown || D.isDown){
			
			HP = HP - 0.01;
			
			//HPdis.setText(Math.floor(HP) + "%");
		} else {
			HP = HP - 0.005;
			//HPdis.setText(Math.floor(HP) + "%");
		}
		HPdis.setText(Math.floor(HP) + "%");
	//}
}


function hurt_rover (garbage, player) {
   /*console.log('garbage');
   console.log(garbage);
   console.log('player');
   console.log(player);*/
   //console.log('wall hit');
  // player.hp = player.hp - 10;
  HP = HP - 1;
  //console.log(player); //debug code
  //player.speed = 0;
  HPdis.setText(HP + "%");
}
function charge(sunlight){
	var space = game.input.keyboard.addKey(32);
	if(player.solar == true){
		if(player.y > 5000 || sunlight){
			if(HP <= 100){
				if(player.speed == 0 && space.isDown){
					HP += 0.12;
				} else {
					HP += 0.0125;
				}
			}
		} 
			 }
		}
		
	

function minimap(current_objective, player, game){
	pointer.rotation = 80 + game.physics.arcade.angleBetween(player, current_objective);
	//pointer.rotation = 80 + game.physics.arcade.angleBetween(rover, current_objective);
	//so that it points based on your location.
}

// Keep your Main
function objective_description(current_mish){
	MishDisplay_title.setText(current_mish.title);
	MishDisplay_dscr.setText(current_mish.dscr);
}

function changeObjective() {
	MishDisplay_title.setText( 'Strange Readings');
	MishDisplay_dscr.setText( 'We\'re picking up electromagnetic readings coming from the north. Take your newly acquired solar panels and go investigate!');
}

//harold added
function destroy_HUD() {
   Battery.destroy();
   pointer.destroy();
   Map.destroy();
   HPdis.destroy();
   terminal.destroy();
   MishDisplay_title.destroy();
   MishDisplay_dscr.destroy();
}
/*
var Batttery;
var pointer;
var Map;
var MishDisplay_title;
var MishDisplay_dscr;
var HPdis;
var Mish_1 = {
	title:"Find Solar Panels:",
	dscr:"They're over there dude! Drive over and pick them up!"
};
var terminal;
*/
