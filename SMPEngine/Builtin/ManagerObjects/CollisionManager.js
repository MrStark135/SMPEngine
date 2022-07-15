// The collision system takes in two types of GameObjects and check for collisions
// only between the two types

import { GameObjectsManager } from "../../GameObjectsManager.js";

export class CollisionManager
{
	constructor(comparisonType, id1, id2, collisionHandler = this.#defaultCollisionHandler)
	{
		this.comparisonType = comparisonType;
		switch(comparisonType)
		{
			case 'objectType':
			{
				this.objectType1 = id1;
				this.objectType2 = id2;
				break;
			}
			case 'tag':
			{
				this.tag1 = id1;
				this.tag2 = id2;
				break;
			}
			default:
			{
				throw 'Comparison type invalid for the defined CollisionManager';
			}
		}
	}
	
	Update()
	{
		switch(this.comparisonType)
		{
			case 'objectType':
			{
				GameObjectsManager.gameObjects.forEach((obj1)=>
				{
					if(obj1 instanceof this.objectType1)
					{
						GameObjectsManager.gameObjects.forEach((obj2)=>
						{
							if(obj2 instanceof this.objectType2)
							{
								if(this.#collided(obj1, obj2))
								{
									console.log('[CollisionManager]: collision');
								}
							}
						})
					}
				})
				break;
			}
			case 'tag':
			{
				GameObjectsManager.gameObjects.forEach((obj1)=>
				{
					if(obj1.tag === this.tag1)
					{
						GameObjectsManager.gameObjects.forEach((obj2)=>
						{
							if(obj2.tag === this.tag2)
							{
								if(this.#collided(obj1, obj2))
								{
									console.log('[CollisionManager]: collision');
								}
							}
						})
					}
				})
				break;
			}
		}
	}
	
	Render()
	{
		// Render() must exist, just to follow the convention
	}
	
	#collided(obj1, obj2)
	{
		// calculates first rectangle
		let leftA = obj1.x;
		let rightA = obj1.x + obj1.width;
		let topA = obj1.y;
		let bottomA = obj1.y + obj1.height;
		
		// calculates second rectangle
		let leftB = obj2.x;
		let rightB = obj2.x + obj2.width;
		let topB = obj2.y;
		let bottomB = obj2.y + obj2.height;
				
		// if any of the sides of A are out of B
		if (bottomA <= topB) return false;
		if (topA >= bottomB) return false;
		if (rightA <= leftB) return false;
		if (leftA >= rightB) return false;
		
		// if it got here, they must be overlapping
		return true;
	}
	
	#defaultCollisionHandler()
	{
		// TODO
	}
}