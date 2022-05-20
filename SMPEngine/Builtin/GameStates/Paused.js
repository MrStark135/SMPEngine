import { Game } from "../../Game.js";

export const Paused = 
{
	name: 'PAUSED',
	Update()
	{
		Game.GameStateManager.Update();
	},
	Render()
	{
		Game.GameObjectsManager.Render();
	}
}