//creates the game scene

var player;
var cursors;
var Tunes;
var paused_text;
var play_text;
var quit_text;
var solarPowerUp;
var repair_key;
var solarPanels_Are_Alive;
var strange_rock;
var currentObjective;
var deadRover;
var cvlt1; 
var cvlt2; 
var cvlt3; 
var cvlt4;
var sunlight;
   
function createGameScene() {
   //bground = game.add.tileSprite(0, 0, 1920, 1920, 'background');
   //game.world.setBounds(0, 0, 1920, 1920);
   /*var chgspots = game.add.group();
   chgspots.create(880, 2660, 200, 140, 'background2');
   bcavelight1.scale.setTo(0.1, 0.1);
   chgspots.create(1680, 3400, 280, 240, 'background2');
    bcavelight2.scale.setTo(0.1, 0.1);
   chgspots.create(1480, 1480, 320, 220, 'background2');
   chgspots.bringToTop();
    bcavelight3.scale.setTo(0.1, 0.1);*/
   
 
   bground2 = game.add.tileSprite(2400, 7200, 4800, 9600, 'background2');
   bground = game.add.tileSprite(0, 7200, 2400, 9600, 'background');
   bground3 = game.add.tileSprite(0, 5000, 7200, 7200, 'background2');
   cvbground = game.add.tileSprite(0, 0, 5000, 5000, 'background3');
   wbounds = game.world.setBounds(0, 0, 9600, 9600);

  // makeChargeSpots(game, cvlt1, cvlt2, cvlt3, cvlt4);
   
   cvlt1 = game.add.sprite(880, 2660, 'background2');
   cvlt1.bringToTop();
   cvlt1.scale.setTo(0.2, 0.2);
   cvlt2 = game.add.sprite(1680, 3400, 'background2');
   cvlt2.bringToTop();
   cvlt2.scale.setTo(0.2, 0.2);
   cvlt3 = game.add.sprite(1480, 1480, 'background2');
   cvlt3.bringToTop();
   cvlt3.scale.setTo(0.2, 0.2);
   cvlt4 = game.add.sprite(20, 3000, 'background2');
   cvlt4.bringToTop();
   cvlt4.scale.setTo(0.2, 0.2);
   
   

   rubble = game.add.sprite(80, 85, 'rubble');
   rubble.scale.setTo(0.1, 0.1);
   
   startArcade(game);
   startP2Collision(game);
   
   var playerCollision = game.physics.p2.createCollisionGroup();
   var wallCollisionGroup = game.physics.p2.createCollisionGroup();
   var strangeRockCollision = game.physics.p2.createCollisionGroup();
  
        
   createWalls(game);
   createRocks(game);
   createCaveWalls(game);
   buildValleyA(game, walls, rocks, wallCollisionGroup, playerCollision);
   buildCave(cave_walls, wallCollisionGroup, playerCollision);
   
   strange_rock = makeStrangeRock(game, strangeRockCollision, playerCollision);
	
	MakePowerUps(game);
	deadRover = MakeDeadRovers(game);
	currentObjective = deadRover;
  
   player = game.add.sprite(400, 9400, 'player');
   player.scale.setTo(0.25, 0.25);
   player.anchor.setTo(0.5, 0.5); //new code
   game.physics.p2.enable(player, false);
   
   
   player.hp = 100;
  
   
   
   player.speed = 0;
   solarPanels_Are_Alive = false;
   player.solar = false;
   player.body.mass = 5;
   player.body.setCollisionGroup(playerCollision);
   player.body.collides(wallCollisionGroup);
   player.body.createGroupCallback(wallCollisionGroup, hurt_rover, player);
   cursors = game.input.keyboard.createCursorKeys();
  
  
  

  
  
  
   Tunes = game.add.audio('Dusty');
   Tunes.loop = true;
   Tunes.play();                                      //      DUDE!!!! SOund Here!!!!
   game.camera.follow(player);
		
   
   create_HUD(game);
   game.currentMode = 'gameplay';
   //listen for escape key to handle pausing
   pause_key = game.input.keyboard.addKey(27); //escape key
   pause_key.onDown.add(pauseGameScene);
   
   //listen for mouse clicks to get out of pause menu
   game.input.onDown.add(handlePausedClick, self);
   
   game.time.events.repeat(Phaser.Timer.SECOND * 30, 100, sandstormSpawner);
   
   //UNCOMMENT FOR ROCKSLIDES!!!!!!!!!!!!!!!!!
    game.time.events.repeat(Phaser.Timer.SECOND * 7, 100, rockSpawner);
   
   objective_description(Mish_1);
   
  
}

function updateGameScene() {
   if (game.currentMode != 'gameplay') return;
        
		
		MovePlayer(player, cursors, game);
		drain_battery(player, game);
		charge(sunlight);
		if(solarPanels_Are_Alive == true){
			upgradeCollision(player, solarPowerUp);
		}
	
		if (deadRover)	{
			if (AABBoverlap(player, deadRover)) {
				changeObjective();
				deadRover.destroy();
				currentObjective = strange_rock;
				player.solar = true;
				player.loadTexture('player_solar');
			}
		}
		
		if(AABBoverlap(player, cvlt1) || AABBoverlap(player, cvlt2) || 
			AABBoverlap(player, cvlt3) || AABBoverlap(player, cvlt4)){
			sunlight = true;
		} else {sunlight = false;}
		
		if (AABBoverlap(player, strange_rock)) {
		   destroyGameScene();
		   createWinScreen();
		}
		if ( HP <= 0) {
		   destroyGameScene();
		   createLoseScreen();
		}
		
		minimap(currentObjective, player, game);
}

function pauseGameScene() {
   paused_text = game.add.sprite(game.camera.x+275, game.camera.y+125, 'paused_txt');
   paused_text.z = 101;
   play_text = game.add.sprite(game.camera.x+300, game.camera.y+250, 'play_txt');
   play_text.z = 102;
   quit_text = game.add.sprite(game.camera.x+300, game.camera.y+425, 'quit_txt');
   quit_text.z = 103;
   game.paused = true;
   console.log('game paused');
}

function handlePausedClick(event) {
   if (!game.paused) return;
   //console.log(play_text.x + ', ' + play_text.y + 'to ' + (play_text.x+play_text.width) + ', ' + (play_text.y+play_text.height));
   //console.log(event.x + ', ' +event.y);
   if (game.camera.x+event.x >= play_text.x && event.x+game.camera.x < play_text.x+play_text.width && game.camera.y+event.y >= play_text.y && game.camera.y+event.y < play_text.y+play_text.height)
       unpauseGameScene();
   if (game.camera.x+event.x >= quit_text.x && game.camera.x+event.x < quit_text.x+quit_text.width
             && game.camera.y+event.y >= quit_text.y && game.camera.y+event.y < quit_text.y+quit_text.height) {
       unpauseGameScene();
       destroyGameScene();
       createMainMenu();
   }
   console.log('handled pause click, mouseX is: ' + event.x+', mouseY is: ' + event.y+', play_text.x is: '+play_text.x+', play_text.y is'+play_text.y);
}
                

function unpauseGameScene() {
   game.paused = false;
   paused_text.destroy();
   play_text.destroy();
   quit_text.destroy();
}

function destroyGameScene() {
   game.input.keyboard.destroy();
   /*player.destroy();
   rubble.destroy();
   bground.destroy();
   Tunes.destroy();
   destroy_HUD();
   destroy_walls();*/
   game.world.removeAll();
   game.camera.reset();
}

