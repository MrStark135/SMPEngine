import { Input } from "./Input.js";
import { GameStateManager } from "./GameStateManager.js";
import { GameObjectsManager } from "./GameObjectsManager.js";
import { ctx } from "./common.js";

export const Game =
{
	// an array holding all the gameObjects
	GameObjectsManager: GameObjectsManager,
	// object containing input info
	Input: Input,
	// gameState, a string indicating the state
	GameStateManager: GameStateManager,
	// the renderer
	ctx: ctx,
	// counts frames since the Init() was called
	time: 0,
	
	// Init function, called once
	Init()
	{
		this.GameStateManager.gameState = 'INIT';
		
		this.time = 0;
		
		// setup the renderer
		this.ctx = ctx;
		
		// Init GameObjectsManager module
		this.GameObjectManager = GameObjectsManager;
		this.GameObjectManager.Init();
		
		// Init Input module
		this.Input = Input;
		this.Input.Init();
				
		// Init GameStateManager module - should be loaded last
		this.GameStateManager = GameStateManager;
		this.GameStateManager.Init();
	},
	
	// the Game Loop functions
	Update()
	{
		// according to the current state, the GameStateManager Updates()
		this.GameStateManager.gameState.Update();
		
		this.time++;
	},
	Render()
	{
		// according to the current state, the GameStateManager Renders()
		this.GameStateManager.gameState.Render();
	}
}