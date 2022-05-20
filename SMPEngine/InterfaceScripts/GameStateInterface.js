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

import { GameStateManager } from '../GameStateManager.js';
import { Playing } from '../Builtin/GameStates/Playing.js';
import { pauseGame } from '../Builtin/TransitionManagers/transitionManagers.js';

export const GameStateInterface = 
{
	Init()
	{
		// set the initial state
		GameStateManager.gameState = Playing;
		
		// reset array every Init() to avoid duplicates and garbage
		GameStateManager.transitionManagers = [];
		// add all transition managers
		//GameStateManager.transitionManagers.push(quitGame.bind(GameStateManager));
		GameStateManager.transitionManagers.push(pauseGame.bind(GameStateManager));
	}
}
