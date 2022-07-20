// The collision system takes in two types of GameObjects or string ids, called tags
// and checks for collisions only between the two types

import { GameObjectsManager } from "../../GameObjectsManager.js";
import { GameObject } from "../GameObjects/GameObject.js";

export const compTypes = 
{
	OBJTYPE: 'objectType',
	TAG: 'tag'
};
export class CollisionManager
{	
	constructor(comparisonType, id1, id2, collisionHandler = this.#defaultCollisionHandler)
	{
		this.comparisonType = comparisonType;
		this.collisionHandler = collisionHandler;
		switch(comparisonType)
		{
			case compTypes.OBJTYPE:
			{
				this.objectType1 = id1;
				this.objectType2 = id2;
				break;
			}
			case compTypes.TAG:
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
			case compTypes.OBJTYPE:
			{
				GameObjectsManager.gameObjects.forEach((obj1)=>
				{
					if(obj1.constructor.name === this.objectType1.name)
					{
						GameObjectsManager.gameObjects.forEach((obj2)=>
						{
							if(obj2.constructor.name === this.objectType2.name)
							{
								let collision = this.#collided(obj1, obj2);
								if(collision !== false)
								{
									this.collisionHandler(obj1, obj2, collision);
								}
							}
						})
					}
				})
				break;
			}
			case compTypes.TAG:
			{
				GameObjectsManager.gameObjects.forEach((obj1)=>
				{
					if(obj1.tag === this.tag1)
					{
						GameObjectsManager.gameObjects.forEach((obj2)=>
						{
							if(obj2.tag === this.tag2)
							{
								let collision = this.#collided(obj1, obj2);
								if(collision !== false)
								{
									this.collisionHandler(obj1, obj2, collision);
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
		let left1 = obj1.x;
		let right1 = obj1.x + obj1.width;
		let top1 = obj1.y;
		let bottom1 = obj1.y + obj1.height;
		
		// calculates second rectangle
		let left2 = obj2.x;
		let right2 = obj2.x + obj2.width;
		let top2 = obj2.y;
		let bottom2 = obj2.y + obj2.height;
		
		// ------------------------------------
		
		// if any of the sides of A are out of B
		
		// let diffBottom = bottom1 - top2;
		// if (diffBottom <= 0) return false;
		// obj1.y -= diffBottom * factor;
		// obj2.y += diffBottom * factor;
		
		// let diffTop = top1 - bottom2;
		// if (diffTop >= 0) return false;
		// obj1.y += diffTop * factor;
		// obj2.y -= diffTop * factor;
		
		// let diffRight = right1 - left2;
		// if (diffRight <= 0) return false;
		// obj1.x -= diffRight * factor;
		// obj2.x += diffRight * factor;
		
		// let diffLeft = left1 - right2;
		// if (diffLeft >= 0) return false;
		// obj1.x += diffLeft * factor;
		// obj2.x -= diffLeft * factor;
		
		// --------------------------------
		
		if (bottom1 <= top2) return false;
		if (top1 >= bottom2) return false;
		if (right1 <= left2) return false;
		if (left1 >= right2) return false;
		
		// negative values mean obj2.x > obj1.x, and opposite
		// also applies for Y-axis collisions 
		let collisionData =
		{
			x: 0,
			y: 0
		};

		// X-axis
		let diffX = obj1.x - obj2.x;
		if(diffX >= 0)
		{
			diffX = Math.abs(diffX) - obj2.width;
			collisionData.x = (diffX < 0) ? Math.abs(diffX) : 0;
		}
		else
		{
			diffX = Math.abs(diffX) - obj1.width;
			collisionData.x = (diffX < 0) ? -Math.abs(diffX) : 0;
		}
		
		// Y-axis
		let diffY = obj1.y - obj2.y;
		if(diffY >= 0)
		{
			diffY = Math.abs(diffY) - obj2.height;
			collisionData.y = (diffY < 0) ? Math.abs(diffY) : 0;
		}
		else
		{
			diffY = Math.abs(diffY) - obj1.height;
			collisionData.y = (diffY < 0) ? -Math.abs(diffY) : 0;
		}
		
		// collisionData.x = (right1 - left2 < right2 - left1) ? right1 - left2 : right2 - left1;
		// collisionData.y = (bottom1 - top2 < bottom2 - top1) ? bottom1 - top2 : bottom2 - top1;
		
		// if it got here, they must be overlapping
		return collisionData;
	}
	
	#defaultCollisionHandler(obj1, obj2, collisionData)
	{
		let factor = 0.3;
		
		if (Math.abs(collisionData.x) >= Math.abs(collisionData.y))
		{
			obj1.y += collisionData.y * factor;
			obj2.y -= collisionData.y * factor;
		}
		else
		{
			obj1.x += collisionData.x * factor;
			obj2.x -= collisionData.x * factor;
		}
		
		// obj1.x += collisionData.x * ((collisionData.x > collisionData.y) ? factorS : factorB);
		// obj2.x -= collisionData.x * ((collisionData.x > collisionData.y) ? factorS : factorB);
		// obj1.y += collisionData.y * ((collisionData.x > collisionData.y) ? factorS : factorB);
		// obj2.y -= collisionData.y * ((collisionData.x > collisionData.y) ? factorS : factorB);
	}
}