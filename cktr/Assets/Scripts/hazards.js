//has sandstorms and other hazards


//var sandstorm_timer = 30000; //how long between sandstorms in ms

function loadHazards(game) {
   game.load.image('Sandstorm1', 'Assets/Art/Hazards/sandstorm1.png');
   game.load.image('Sandstorm2', 'Assets/Art/Hazards/sandstorm2.png');
   game.load.image('Sandstorm3', 'Assets/Art/Hazards/sandstorm3.png');
}

function createSandstorm(x, y, lifetime) {
   console.log('createSanstorm called with args' + arguments);
   main_storm = game.add.sprite(x, y, 'Sandstorm1');
   main_storm.lifespan = lifetime;
   main_storm.anchor.setTo(0.5, 0.5);
   main_storm.update = function() {
      this.angle += 0.5;
      if (AABBoverlap(this, player)) {
         HP -= 0.1;
         //console.log('sandstorm hurt rover');
      }
   }
   main_storm.sandstorm2 = game.add.sprite(x, y, 'Sandstorm2');
   main_storm.sandstorm2.lifespan = lifetime;
   main_storm.sandstorm2.anchor.setTo(0.5, 0.5);
   main_storm.sandstorm2.update = function() {
      this.angle -= 0.7;
      /*if (AABBoverlap(this, player)) {
         rover_health -= 0.2;
         //console.log('sandstorm hurt rover');
      }*/
   }
   main_storm.sandstorm3 = game.add.sprite(x, y, 'Sandstorm3');
   main_storm.sandstorm3.lifespan = lifetime;
   main_storm.sandstorm3.anchor.setTo(0.5, 0.5);
   main_storm.sandstorm3.update = function() {
      this.angle += 0.8;
      /*if (AABBoverlap(this, player)) {
         rover_health -= 0.2;
         console.log('sandstorm hurt rover');
      }*/
   }
   return main_storm;
}

function sandstormSpawner() {
   console.log('sandstormSpawner called');
   //createSandstorm(Math.random() * 9600, Math.random() * 9600, Phaser.Timer.SECOND * 30);
   
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   createSandstorm(randomRange(4800,7200), randomRange(7200, 9600), Phaser.Timer.SECOND * 30);
   
   createSandstorm(300, 9200, Phaser.Timer.SECOND * 30);
}
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
function AABBoverlap(sprite1, sprite2) {
   return Phaser.Rectangle.intersects(
       sprite1.getBounds(), sprite2.getBounds());
}

function createRocks(game){
    rocks = game.add.group();
    rocks.enableBody = true;
    rocks.physicsBodyType = Phaser.Physics.ARCADE;
    
    }
    
function makeRock(rocks, x, y, lifespan){
	var rock = rocks.create(x, y, 'wall');
	rock.scale.setTo(0.1, 0.1);
	
	
	rock.update = function() {
      this.angle += 2;
      if (AABBoverlap(this, player)) {
         HP -= 0.1;
      }
   }
	
   
    
    rock.body.velocity.x = randomRange(150, 300);
    rock.lifespan = lifespan;
    
    rock.bringToTop();
}

function rockSpawner(){
	console.log("rock made")
	//makeRock(rocks, 400, 9300, Phaser.Timer.SECOND * 7);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	makeRock(rocks, randomRange(400, 650), randomRange(5000, 7200), Phaser.Timer.SECOND * 8);
	
	
	
	
	
	//makeRock(rocks, 300, 9200, Phaser.Timer.SECOND *7);	
}
/*function makeRock(game, rocks, x, y, xScale, yScale, wallCollisionGroup, playerCollision){
		
        var rock = rocks.create(x, y, 'wall');
        rock.scale.setTo(xScale, yScale);
        rock.body.setRectangle(rock.width, rock.height);
        rock.body.applyDamping = true;
        
        rock.body.damping = 0.7;
        rock.body.angluarDamping = 0.95;
        rock.body.mass = 20;
        rock.body.velocity.x = 2000;
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
        		checkRock(game, rock, x, y);
        		makeRock(game, rocks, x, y, xScale, yScale, wallCollisionGroup, playerCollision);
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
	}
}*/
