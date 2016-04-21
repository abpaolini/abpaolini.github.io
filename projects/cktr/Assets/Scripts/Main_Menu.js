//handles the main menu functionality
//createMainMenu sets up the main menu
//updateMainMenu is run every frame
//destroyMainMenu cleans up all objects when main menu is done
var title_text;
var ctitle_text;
var subtitle_text;
var play_button;
var credits_button;
var credits_text;
var credits_subtext;
var win_title;
var win_text;
var lose_title;
var lose_text;
var return_win_text;
var return_lose_text;

function createMainMenu() {
	//console.log(game.currentMode);
   game.currentMode = 'mainMenu';
   //console.log(game.currentMode);
   game.stage.backgroundColor = '#FFFFFF';
   title_text = game.add.text(160, 100, 'Curiosity Killed the Rover',
                   { font: '40px Impact', fill: '#330000', align: 'center' });
   subtitle_text = game.add.text(240, 150, 'An adventure on the red planet',
                   { font: '20px Arial', fill: '#1A0000', align: 'center' });
   play_button = game.add.text(300, 300, 'Play',
                   { font: '50px Impact', fill: '#330000', align: 'center' });
   credits_button = game.add.text(295, 400, 'Credits',
                   { font: '30px Impact', fill: '#330000', align: 'center' });
   //align center doesn't seem to work
   title_text.align = 'center';
   play_button.align = 'center';
   subtitle_text.align = 'center';
   credits_button.align = 'center';
   play_button.inputEnabled = true;
   play_button.events.onInputUp.add(function() {
      destroyMainMenu();
      createGameScene();
   });
   
   credits_button.inputEnabled = true;
   credits_button.events.onInputUp.add(function() {
      destroyMainMenu();
      createCreditsMenu();
   });
   game.input.mouse.mouseDownCallback = function() {
      if (game.currentMode != 'credits') return;
      destroyCreditsMenu();
	  createMainMenu();
   }
}

function updateMainMenu(d) {
   if (game.currentMode != 'mainMenu') return;
}

function destroyMainMenu() {
   title_text.destroy();
   subtitle_text.destroy();
   play_button.destroy();
   credits_button.destroy();
}
/*
function displayCreditsMenu() {
   title_text.visible = false;
   subtitle_text.visible = false;
   play_button.visible = false;
   credits_button.visibe = false;
   credits_text = game.add.text(200, 180, 'Curiosity Killed the Rover is a collaborative endeavour)
}*/
function createCreditsMenu() {
   game.currentMode = 'credits';
   ctitle_text = game.add.text(160, 100, 'Curiosity Killed the Rover',
                   { font: '40px Impact', fill: '#330000', align: 'center' });
   credits_text = game.add.text(120, 180, 'is a collaborative endeavour featuring the work of:', { font: '30px Impact', fill: '#330000', align: 'center' });
   credits_subtext = game.add.text(220, 300, 'Austin Provensal \nAndrew Paolini \nTyler Reed \nHarold Townsend', { font: '48px Impact', fill: '#330000', align: 'center' });
};

function destroyCreditsMenu() {
   ctitle_text.destroy();
   credits_text.destroy();
   credits_subtext.destroy();
}

function createWinScreen() {
   game.currentMode = 'win';
   win_title = game.add.text(276, 180, 'YOU WIN!',
                { font: '72px Impact', fill: '#330000', align: 'center' });
   win_text = game.add.text(100, 250, 'You have found a rock with carvings \nclearly made by a sentient being \n this is convincing evidence of life on the Red Planet!',
                { font: '30px Impact', fill: '#330000', align: 'center' });
   return_win_text = game.add.text(300, 550, 'Click anywhere to return to the main menu',
                { font: '20px Impact', fill: '#000000', align: 'center' });
   game.input.mouse.mouseDownCallback = function() {
      if (game.currentMode != 'win') return;
      destroyWinScreen();
	  createMainMenu();
   }
				
}

function destroyWinScreen() {
   win_title.destroy();
   win_text.destroy();
   return_win_text.destroy();
}

function createLoseScreen() {
   game.currentMode = 'lose';
   HP = 100;
   lose_title = game.add.text(276, 180, 'YOU LOSE',
                { font: '72px Impact', fill: '#330000', align: 'center' });
   lose_text = game.add.text(200, 250, 'You have ran out of batteries \n and are stranded on the Red Planet!',
                { font: '30px Impact', fill: '#330000', align: 'center' });
   return_lose_text = game.add.text(200, 550, 'Click anywhere to return to the main menu',
                { font: '20px Impact', fill: '#000000', align: 'center' });
   game.input.mouse.mouseDownCallback = function() {
      if (game.currentMode != 'lose') return;
      destroyLoseScreen();
	  createMainMenu();
   }
}

function destroyLoseScreen() {
   lose_title.destroy();
   lose_text.destroy();
   return_lose_text.destroy();
}
   
