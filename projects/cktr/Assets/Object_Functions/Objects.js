var walls;
//var solarPowerUp;
var Dead_Rover;
var cave_walls;

//Got stumped on hud updates so I made a rock
/*
var strangeRock = {
	description: "What are these markings?",
	image:'rock'
};
*/
function makeChargeSpots(game, cvlt1, cvlt2, cvlt3, cvlt4){
	cvlt1 = game.add.sprite(880, 2660, 'background2');
   cvlt1.bringToTop();
   cvlt1.scale.setTo(0.1, 0.1);
   cvlt2 = game.add.sprite(1680, 3400, 'background2');
   cvlt2.bringToTop();
   cvlt2.scale.setTo(0.1, 0.1);
   cvlt3 = game.add.sprite(1480, 1480, 'background2');
   cvlt3.bringToTop();
   cvlt3.scale.setTo(0.1, 0.1);
   cvlt4 = game.add.sprite(400, 9300, 'background3');
   cvlt4.bringToTop();
   cvlt4.scale.setTo(0.1, 0.1);
   
  
   
}

function loadObjects(game){
	game.load.image('wall', 'Assets/Art/World/BasicWall.png');
	game.load.image('solar', 'Assets/Art/PowerUps/Solar.png');
	game.load.image('rubble', 'Assets/Art/World/Rubble.png');
	game.load.image('rock', 'Assets/Art//World/StrangeRock.png');
	game.load.image('caveWall', 'Assets/Art/World/cavewall.png');
	game.load.image('dead_rover', 'Assets/Art/Rover/Rover_Dead.png');
}

/*function MakeSolarPowerUp(game){
	solarPowerUp = powerUps.create(400, 100, 'solar');
	solarPowerUp.scale.setTo(0.2, 0.2);
}*/

function makeStrangeRock(game) {
	strange_rock = game.add.sprite(3300, 300, 'rock');
	return strange_rock;
}


function createRocks(game){
    rocks = game.add.group();
    rocks.enableBody = true;
    rocks.physicsBodyType = Phaser.Physics.P2JS;
    
    }
    
function makeRock(game, rocks, x, y, xScale, yScale, wallCollisionGroup, playerCollision){
		
        var rock = rocks.create(x, y, 'wall');
        rock.scale.setTo(xScale, yScale);
        rock.body.setRectangle(rock.width, rock.height);
        rock.body.applyDamping = true;
        
        rock.body.damping = 0.7;
        rock.body.angluarDamping = 0.95;
        rock.body.mass = 20;
        rock.body.velocity.x = 200;
        rock.body.setCollisionGroup(wallCollisionGroup);
        rock.body.collides([wallCollisionGroup, playerCollision]);
        //if(rock.body.x > game.camera.x){
        	//rock.kill();
        //}
        //rock.lifespan = 2000;
        
        for(var i = 2500; i > 0; i--){
        	if(i%100 == 0){ console.log(i);}
        	
        	if(i==10){
        		rock.kill();
        		console.log("x: " + x + "y: " + y + "i: " + i + "rock: " + rock.alive);
        		//checkRock(game, rock, x, y);
        	}
        	
        	//makeRock(game, rocks, x, y, xScale, yScale, wallCollisionGroup, playerCollision);
        }
}

function checkRock(game, rock, x, y){
	console.log("checkRock is being called")
	//if(rock.alive != true){
		rock.reset(x, y);
	//}
	/*if(rock.body.x > game.camera.x){
		rock.kill();
		console.log("rock is dead.");
		rock.reset(x, y);
		console.log("rock is alive");
	}*/
}
function createWalls(game){
	walls = game.add.group();
	walls.enableBody = true;
	walls.physicsBodyType = Phaser.Physics.P2JS;
	}
function createCaveWalls(game){
	cave_walls = game.add.group();
	cave_walls.enableBody = true;
	cave_walls.physicsBodyType = Phaser.Physics.P2JS;
}
	//var wallCollisionGroup = game.physics.p2.createCollisionGroup();
function makeWall(walls, x, y, xScale, yScale, wallCollisionGroup, playerCollision){
		var w = (800*xScale)/2;
		var h = (800*yScale)/2;
		var wall = walls.create(x + w, y + h, 'wall');
		wall.scale.setTo(xScale, yScale);
		wall.body.setRectangle(wall.width, wall.height);
		wall.body.static = true;
		wall.body.setCollisionGroup(wallCollisionGroup);
		wall.body.collides([wallCollisionGroup, playerCollision]);
	
}

function makeCaveWall(cavewalls, x, y, xScale, yScale, wallCollisionGroup, playerCollision){
		var w = (800*xScale)/2;
		var h = (800*yScale)/2;
		var wall = cavewalls.create(x + w, y + h, 'caveWall');
		wall.scale.setTo(xScale, yScale);
		wall.body.setRectangle(wall.width, wall.height);
		wall.body.static = true;
		wall.body.setCollisionGroup(wallCollisionGroup);
		wall.body.collides([wallCollisionGroup, playerCollision]);
	
}

function currentMap(world, map){
	if(world = 1){
		if(map = 1) buildValleyA(walls, wallCollisionGroup, playerCollision);
		if(map = 2) buildValleyB(walls, wallCollisionGroup, playerCollision);
		if(map = 3) buildCave(cave_walls, wallCollisionGroup, playerCollision);
	}
}

function buildValleyA(game, walls, rocks, wallCollisionGroup, playerCollision){
	
	makeWall(walls, 0, 7200, 0.19, 6, wallCollisionGroup, playerCollision);
	makeWall(walls, 1600, 7200, 10, 0.19, wallCollisionGroup, playerCollision);
	makeWall(walls, 0, 7200, 1, 0.19, wallCollisionGroup, playerCollision);
	makeWall(walls, 7200, 7200, 0.19, 4, wallCollisionGroup, playerCollision);
	//makeWall(walls, 0, 0, 6, 0.19, wallCollisionGroup, playerCollision);
	makeWall(walls, 0, 9580, 10, 0.19, wallCollisionGroup, playerCollision);
	//makeWall(walls, 2380, 0, 0.19, 2, wallCollisionGroup, playerCollision);
	makeWall(walls, 800, 8890, 0.13, 1,wallCollisionGroup, playerCollision);
	makeWall(walls, 0, 8200, 0.6875, 0.75,wallCollisionGroup, playerCollision);
	makeWall(walls, 150, 7850, 1.5, 0.44,wallCollisionGroup, playerCollision);
	makeWall(walls, 2400, 8800, 0.13, 1, wallCollisionGroup, playerCollision);
	//makeWall(walls, , , , ,wallCollisionGroup, playerCollision);
	makeWall(walls, 2400, 8000, 0.3, 0.6,wallCollisionGroup, playerCollision);
	makeWall(walls, 1600, 7850, 2, 0.1875,wallCollisionGroup, playerCollision);
	
	makeWall(walls, 3200, 8000, 1, 0.5,wallCollisionGroup, playerCollision);
	makeWall(walls, 4000, 8000, 1, 1, wallCollisionGroup, playerCollision);
	makeWall(walls, 4800, 8800, 0.5, 0.4, wallCollisionGroup, playerCollision);
	makeWall(walls, 4400, 8800, 0.5, 0.2, wallCollisionGroup, playerCollision);
	
	makeWall(walls, 0, 5000, 1, 2.75, wallCollisionGroup, playerCollision);
	makeWall(walls, 648, 5000, 0.19, 2.75, wallCollisionGroup, playerCollision);
	makeWall(walls, 0, 5000, 1, 1, wallCollisionGroup, playerCollision);
	makeWall(walls, 1750, 5000, 6, 1, wallCollisionGroup, playerCollision);
	
	//makeWall(walls, , , , ,wallCollisionGroup, playerCollision);
	//makeWall(walls, 500, 400, 0.625, 0.5, wallCollisionGroup, playerCollision);
	//makeWall(walls, 1400, 400, 0.75, 0.625, wallCollisionGroup, playerCollision);
	//makeWall(walls, 500, 1400, 2,0.375, wallCollisionGroup, playerCollision);
	//for(var i = 0; i < 3; i++){
		
		
	//}
	//makeRock(rocks, 2055, 2471, 0.1, 0.1, wallCollisionGroup, playerCollision);
	
}



function buildCave(w, wallCollisionGroup, playerCollision){
	//framing the entire map
	makeCaveWall(w, 0, 0, 0.1, 6, wallCollisionGroup, playerCollision); //left //xend = 4800  
	makeCaveWall(w, 0, 0, 6, 0.1, wallCollisionGroup, playerCollision); // top
	makeCaveWall(w, 4800, 0, 0.1, 6, wallCollisionGroup, playerCollision); //right
	makeCaveWall(w, 500, 4800, 6.1, 0.1, wallCollisionGroup, playerCollision); //bottom - leave room to enter
	
	//maze inside layer one
	makeCaveWall(w, 200, 200, 5.25, 0.1, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 200, 200, 0.1, 2.5, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 200, 2400, 0.1, 1, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 200, 3400, 0.1, 1.5, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 200, 4520, 0.5, 0.1, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 740, 4520, 1, 0.1, wallCollisionGroup, playerCollision);
	makeCaveWall(w, 1740, 4520, 1.5, 0.1, wallCollisionGroup, playerCollision);
		//cubby1
		makeCaveWall(w, 2540, 3520, 0.1, 1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 2620, 3520, 1, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 3340, 3520, 0.1, 1.6, wallCollisionGroup, playerCollision);
		//DE1
		//makeCaveWall(w, 3200, 380, 2, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 3200, 280, 0.1, 0.125, wallCollisionGroup, playerCollision);
		//ch1
		makeCaveWall(w, 280, 2800, 1.75, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 480, 280, 0.1, 2.9, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 680, 480, 0.1, 2.9, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1080, 280, 0.1, 3.15, wallCollisionGroup, playerCollision);
		//ch2
		makeCaveWall(w, 480, 2880, 0.1, 0.65, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 880, 3120, 0.1, 0.65, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1280, 2880, 0.1, 0.65, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1600, 2880, 0.1, 0.95, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 280, 3640, 2, 0.1, wallCollisionGroup, playerCollision);
		//ch3
		makeCaveWall(w, 1340, 3770, 0.1, 0.9375, wallCollisionGroup, playerCollision); //cant fit on purpose
		makeCaveWall(w, 280, 4320, 1, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 480, 4060, 1.075, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 280, 3860, 1, 0.1, wallCollisionGroup, playerCollision);
		
		//ent1
		makeCaveWall(w, 1880, 3640, 0.1, 0.7, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1680, 3320, 3, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 4080, 3320, 0.1, 1.6, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 4480, 3320, 0.1, 1.6, wallCollisionGroup, playerCollision);
		
		//goal
		makeCaveWall(w, 1800, 1400, 0.1, 2, wallCollisionGroup, playerCollision); //left
		makeCaveWall(w, 1800, 1400, 1.75, 0.1, wallCollisionGroup, playerCollision); //top
		makeCaveWall(w, 1800, 3000, 2.1, 0.1, wallCollisionGroup, playerCollision); //bottom
		makeCaveWall(w, 3400, 1400, 0.1, 2, wallCollisionGroup, playerCollision); //right
		makeCaveWall(w, 3400, 1400, 1.75, 0.1, wallCollisionGroup, playerCollision);//right blockage
		
		//fork
		makeCaveWall(w, 4480, 1680, 0.1, 2.05, wallCollisionGroup, playerCollision); 
		makeCaveWall(w, 4080, 1680, 0.5, .1, wallCollisionGroup, playerCollision); 
		makeCaveWall(w, 4080, 1680, 0.1, 2.05, wallCollisionGroup, playerCollision); 
		
		//switchbacks
		makeCaveWall(w, 1400, 2400, 0.5, .1, wallCollisionGroup, playerCollision); 
		makeCaveWall(w, 1160, 2120, 0.5, .1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1400, 1940, 0.5, .1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1400, 1400, 0.5, .1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1400, 1400, 0.1, 0.5, wallCollisionGroup, playerCollision);
		
		//inner fuckery
		makeCaveWall(w, 1160, 500, 1, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 1960, 500, 0.1, 1, wallCollisionGroup, playerCollision);
		
		makeCaveWall(w, 3120, 660, 0.1, 0.925, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 2200, 660, 1.15, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 2200, 500, 0.1, 0.5, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 2750, 270, 0.1, 0.2, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 2750, 530, 0.1, 0.175, wallCollisionGroup, playerCollision);
		
		//last bit
		makeCaveWall(w, 3200, 1110, 1, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 4400, 1110, .5, 0.1, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 4400, 560, 0.1, 0.6875, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 3920, 560, 0.1, 0.6875, wallCollisionGroup, playerCollision);
		
		//block edge of the world
		makeCaveWall(w, 4000, 4880, 0.1, 0.15, wallCollisionGroup, playerCollision);
		makeCaveWall(w, 0, 4800, 0.1, 0.25, wallCollisionGroup, playerCollision);
		
		makeCaveWall(w, 3300, 0, 0.1, 0.3, wallCollisionGroup, playerCollision);
		

}

/*-------------------------------------------*/
//
//Making in-game objects
//
/*-------------------------------------------*/

function MakeDeadRovers(game, selfCollisionGroup, otherCollisionGroup){
	//Create Dead_Rover in the powerUps group
	Dead_Rovers = game.add.group();
	//Dead_Rovers.enableBody = true;
	
	Dead_Rover_1 = powerUps.create(6400, 8000, 'dead_rover');
	Dead_Rover_1.scale.setTo(0.2, 0.2);
	/*Dead_Rover_1.anchor.setTo(0.5, 0.5);
	game.physics.p2.enableBody(Dead_Rover_1);
	console.log(Dead_Rover_1.body);
	Dead_Rover_1.mass = 5;
	Dead_Rover_1.body.setCollisionGroup(selfCollisionGroup);
	Dead_Rover_1.body.collides(otherCollisionGroup);
	Dead_Rover_1.createGroupCallback(otherCollisionGroup, changeObjective);*/
	return Dead_Rover_1;
	//Dead_Rover_1.inputEnabled = true;
	//Dead_Rover_1.events.onInputDown.addOnce(listener, this);
}

function listener(){
	solarPanels_Are_Alive = true;
	MakeSolarPowerUp(game);
}
/*function MakeWalls(game){
	
	walls = game.add.group();
	walls.enableBody = true;
	MakeAWall(625, 0, 0.4, 0.4);
	MakeAWall(0, 423, 0.3, 0.2);
	MakeAWall(0, 0, 0.2, 0.1);
	MakeAWall(0, 50, 0.3, 0.1);
	
}

function MakeAWall(x, y, xScale, yScale){
	
	 var wall = walls.create(x, y, 'wall');

    wall.scale.setTo(xScale, yScale);

    wall.body.immovable = true;
}*/

/*
 The x and y are the upper left x,y coordinates. And the xScale and yScale, 
 is the number you multiply by the actual picture size and it scales the width 
 and height. So for that example its a wall that's left corner is placed at x = 0 
 and y = 7200 and since that image is 800x800 pixels, the object that's made is (0.19*800)x(6*800).
 * */
