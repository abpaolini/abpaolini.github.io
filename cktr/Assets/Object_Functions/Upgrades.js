var powerUps;
//var upgrades;
function MakePowerUps(game){
	powerUps = game.add.group();
	powerUps.enableBody = true;
}
function MakeSolarPowerUp(game){
	solarPowerUp = powerUps.create(6400, 8030, 'solar');
	solarPowerUp.scale.setTo(0.2, 0.2);
	 
}
function upgradeCollision(player, powerUp){
	if(powerUp == solarPowerUp){
		if(powerUp.overlap(player)){
		
	 		player.solar = true;
	 		powerUp.destroy();
	 		player.loadTexture('player_solar');
	 	}
	}
}
/*function MakeUpgradeGroup(game){
	upgrades = game.add.group();
}
/*function MakeUpgrade(powerUp){
	this.powerUp = upgrades.create(Rover_proto.x, Rover_proto.y, 'solar');
}*/
