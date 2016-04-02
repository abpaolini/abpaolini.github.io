/*function wallCollision(game, player, wall){
	game.physics.arcade.collide(player, walls);
}
function upgradeCollision(game, player, powerUps){
	if(game.physics.arcade.collide(player, powerUps)){
		//MakeUpgrade(this.powerUps, 'solar');
		this.powerUps.destroy();
		
		
	}
}*/
function startArcade(game){
	 game.physics.startSystem(Phaser.Physics.ARCADE);
}
function startP2Collision(game){
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.updateBoundsCollisionGroup();
    
}

