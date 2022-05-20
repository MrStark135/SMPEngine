import { Game } from "../../Game.js";

export const Playing = 
{
	name: 'PLAYING',
	Update()
	{
		Game.GameObjectsManager.Update();
		Game.GameStateManager.Update();
	},
	Render()
	{
		Game.GameObjectsManager.Render();
	}
}