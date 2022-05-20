// A small JavaScript Game Engine, useful for small projects
// Main features:
// - create sprite gameObjects (rectangles only)
// Conventions I use:
// all Modules are a JavaScript object
// all modules have an Init() function

import { Game } from "./Game.js";
import { canvas, ctx } from "./common.js"

// Init Game, the GameManager object
Game.Init();

// start the game loop
gameLoop(0);

var animId;
function gameLoop(timestamp)
{	
	// Update()
	Game.Update();
	
	// Render()
	ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
	Game.Render();
	
	// game loop is managed with requestAnimationFrame()
	// it's calling recursively the gameLoop()
	if(Game.gameState == 'GAMEOVER')
	{
		// if we want to exit from the game loop, 
		// cancelAnimationFrame() with the id
		window.cancelAnimationFrame(animId);
		return;
	}
	// store the id, for cancelAnimationFrame()	
	animId = window.requestAnimationFrame(gameLoop);
}