/**
 * @author Tyler
 */

var screwmatic;
var screw;
var success = 0;
// var screw = new Array();
//

function create_phys_repair(){
	game.load.image('screwmatic', 'Assets/Art/phys_minigame/screwmatic.png');
	game.load.image('screw', 'Assets/Art/phys_minigame/screw.png');
	screw = game.add.sprite(0, 0, 'screw');
	screw.scale.setTo(2, 2);
	game.physics.enable(screw, Phaser.PHysics.ARCADE);
	screw.body.velocity.y = 100;
	screw.inputEnabled = true;
	screw.events.onImputDown.add(tighten(screw), this);
	
	//screws
	/*for(var i = 0; i < 6; i++){
		screw[i] = game.add.sprite((50 * i), 0, 'screw');
		screw.scale.setTo(2, 2);
		game.physics.enable(screw[i], Phaser.PHysics.ARCADE);
		screw[i].body.velocity.y = 100;
		screw[i].inputEnabled = true;
		screw[i].events.onImputDown.add(tighten(screw[i]), this);
	}
	*/
	//pointer
	
	//time
	game.time.events.add(Phaser.Timer.Second * 8, endRepair, this);
	
}

function update_phys_repair(){
	for(var i = 0; i < 6; i++){
		if(screw[i].y == -50){
			success += 1;
			screw[i].body.veloctiy.y = 0;
		}
	}
}

function destroy_phys_repair(){
	for(var i = 0; i < 6; i++){
		screw[i].destroy();
	}
}

function tighten(wercs){
	wercs.y += -10;
}

function endRepair(){
	var text = game.add.text(game.world.centerX, game.world.centerY, );
}
