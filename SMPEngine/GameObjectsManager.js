import { GameObjectsInterface } from "./InterfaceScripts/GameObjectsInterface.js";

export const GameObjectsManager =
{
	// all gameObjects
	gameObjects: [],
	// just a game objects interface, so that user doesn't modify here
	GameObjectsInterface: GameObjectsInterface,
	
	Init()
	{
		// Init GameObjectsInterface module
		this.GameObjectsInterface = GameObjectsInterface;
		this.GameObjectsInterface.Init();
		
		console.log('[GameObjectsManager]: Init done');
	},
	
	Update()
	{		
		// run Update for all gameObjects
		for(let i = 0; i < this.gameObjects.length; i++)
		{
			this.gameObjects[i].Update();
		}
	},
	Render()
	{
		// run Render() for all gameObjects
		for(let i = 0; i < this.gameObjects.length; i++)
		{
			this.gameObjects[i].Render();
		}
	}
}