// This is an INTERFACE between the user scripts and the Engine
// Do not modify the Game Engine (except in case of errors in the code)
// Everything you want this game engine to do should be done in these files

// Add GameStates creating a singleton object like this:
// export const <STATE_NAME> =
// {
// 		name: <STRING_IDENTIFIER>,
// 		Update: function() { /* All Updates() that should be done during this state */ }
// 		Render: function() { /* All Renders() that should be done during this state */ }
// }

// Add transitions to and from this state by making a transition manager function
// Transition manager should change GameStateManager.gameState = <NEW_STATE>
// push() the function in GameStateManager.transitionManagers array in Init()
// Put transitionManager definitions to the bottom of this file

// import ctx and canvas (for rendering): import { canvas, ctx } from "../common.js";
// import Input: import { Input } from "../Input.js";

import { Game } from "../Game.js";
import { GameStateManager } from "../GameStateManager.js"
import { Playing } from "../UserScripts/GameStates/Playing.js";
import { Paused } from "../UserScripts/GameStates/Paused.js";
import { Gameover } from "../UserScripts/GameStates/Gamover.js";

export const GameStateInterface = 
{
	Init()
	{
		// set the initial state
		GameStateManager.gameState = Playing;
		
		// reset array every Init() to avoid duplicates and garbage
		GameStateManager.transitionManagers = [];
		
		// add all transition managers
		GameStateManager.transitionManagers.push(quitGame.bind(GameStateManager));
		GameStateManager.transitionManagers.push(pauseGame.bind(GameStateManager));
	}
}

// ----------------------- Transition Managers -------------------------
// here go all transitionManagers. Add more functions by pushing() them in Init()
// add short documentation for each function you add

// if 'Escape' pressed transition to GAMEOVER
function quitGame()
{
	if(Game.Input.keyDown == 'Escape')
		this.gameState = Gameover;
}

// if 'Space' is pressed toggle PAUSED state. Possible only when PLAYING
function pauseGame()
{
	// toggles between PLAYING and PAUSED
	// NOTICE: game can be PAUSED only when PLAYING
	
	if(Game.Input.keyDown == 'Space' &&	this.gameState.name == 'PLAYING')
		this.gameState = Paused;
	else if(Game.Input.keyDown == 'Space' && this.gameState.name == 'PAUSED')
		this.gameState = Playing;
}