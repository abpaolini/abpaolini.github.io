//Controls.js
//Contains all the controls for the game
    
function MovePlayer(player, cursors, game){
    //console.log(player.speed);
	//Player Basic Movement Controls
	
	//WASD declerations might be making things slower fyi.
	var W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var A =  game.input.keyboard.addKey(Phaser.Keyboard.A);
    var S = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var D = game.input.keyboard.addKey(Phaser.Keyboard.D);
    
	 if (A.isDown)
    {
		player.body.rotateLeft(80);
		//player.body.angularVelocity = -5;
    }
    else if (D.isDown)
    {
		player.body.rotateRight(80);
		//player.body.angularVelocity = 5;
    }
    else
    {
		player.body.setZeroRotation();
    }

    if (W.isDown)
    {
    	//player.body.thrust(450);
		//player.body.moveForward(450);
		player.speed+=10;
    }
    else if (S.isDown)
    {
        //player.body.reverse(300);
		//player.body.moveBackward(300);
		player.speed-=10;
    }
    else
    {
    	player.body.damping = 0.75;
    }
	if (player.speed > 0) {
	   player.speed = Math.max(player.speed - 5, 0);
	}
	else if (player.speed < 0) {
	   player.speed = Math.min(player.speed + 5, 0);
	}
	if (player.speed > 400) player.speed = 400;
	else if (player.speed < -250) player.speed = -250;
	
    player.body.moveForward(player.speed);
    if (player.body.velocity > 1.0)
    {
    	player.body.velocity = 1.0;
    }
 }