// Cleans any object that completely exited from the viewport

import { GameObjectsManager } from "../../GameObjectsManager.js";
import { canvas } from "../../common.js";

export class GarbageCollector
{
	constructor()
	{
		// this just runs a check, doesn't store anything
	}
	
	Update()
	{
		GameObjectsManager.gameObjects.forEach((object, idx) =>
		{
			if(object.x > canvas.width || (object.x + object.width) < 0)
			{
				GameObjectsManager.gameObjects.splice(idx, 1);
			}
			else if(object.y > canvas.height || (object.y + object.height) < 0)
			{
				GameObjectsManager.gameObjects.splice(idx, 1);
			}
		});
	}
	
	Render()
	{
		// doesn't render
	}
}