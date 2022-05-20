import { GameStateInterface } from './InterfaceScripts/GameStateInterface.js';

// frames passed since last transition after which new transition can occur
const lastTransitionThreshold = 20;

export const GameStateManager = 
{
	// the current state
	gameState: {},
	// state transition functions
	transitionManagers: [],
	// Interface for the user
	GameStateInterface: GameStateInterface,
	// a helper var used to disable changing gameStates shortly after a change
	lastTransition: lastTransitionThreshold,
	
	Init()
	{	
		// Init the gameState object
		this.gameState = 
		{
			// each state has a Update() and Render() functions
			// name is used for identifying current state
			name: 'INIT',
			Update: function() {},
			Render: function() {}
		}
		
		// Init GameStateInterface module
		this.GameStateInterface = GameStateInterface;
		this.GameStateInterface.Init();
		
		console.log('[GameStateManager]: Init done');
	},
	
	Update()
	{		
		// ------------- Transition related code --------------------
		let prevGameState = this.gameState.name;
		
		// first run all transition checks
		for(let i = 0; i < this.transitionManagers.length; i++)
		{
			// to prevent unwanted registering of multiple state changes during a short interval
			if(this.lastTransition > lastTransitionThreshold)
				this.transitionManagers[i]();
			
			// reset lastTransition after a change in gameState
			if(prevGameState != this.gameState.name) this.lastTransition = 0;
		}
		
		// log the state if there was a change
		if(prevGameState != this.gameState.name)
			console.log('[GameStateManager] Current game state: ' + this.gameState.name);
			
		this.lastTransition++; // increase lastTransition every frame
	}
}