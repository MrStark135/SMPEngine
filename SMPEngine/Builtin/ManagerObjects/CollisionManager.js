// The collision system takes in two types of GameObjects or string ids, called tags
// and checks for collisions only between the two types

import { GameObjectsManager } from "../../GameObjectsManager.js";

export const compTypes = 
{
	OBJTYPE: 'objectType',
	TAG: 'tag'
};
export class CollisionManager
{	
	constructor(comparisonType, id1, id2, collisionHandler = this.#defaultCollisionHandler)
	{
		this.id1 = id1;
		this.id2 = id2;
		
		this.collisionHandler = collisionHandler;
		
		switch(comparisonType)
		{
			case compTypes.OBJTYPE:
			{
				this.comparator = compareObjectTypes;
				break;
			}
			case compTypes.TAG:
			{
				this.comparator = compareTags;
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
		GameObjectsManager.gameObjects.forEach((obj1) => 
		{
			if (this.comparator(obj1, this.id1))
			{
				GameObjectsManager.gameObjects.forEach((obj2) => 
				{
					if (this.comparator(obj2, this.id2))
					{
						let collisionData = this.#collided(obj1, obj2);
						if (collisionData.x !== 0 && collisionData.y !== 0)
						{
							console.log('collision');
							this.collisionHandler(obj1, obj2, collisionData);
						}
					}
				})
			}
		})
	}
	
	Render()
	{
		// Render() must exist, just to follow the convention
	}
	
	#collided(obj1, obj2)
	{		
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
			diffX = diffX - obj2.width;
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
			diffY = diffY - obj2.height;
			collisionData.y = (diffY < 0) ? Math.abs(diffY) : 0;
		}
		else
		{
			diffY = Math.abs(diffY) - obj1.height;
			collisionData.y = (diffY < 0) ? -Math.abs(diffY) : 0;
		}
		
		// if it got here, they must be overlapping
		return collisionData;
	}
	
	#defaultCollisionHandler(obj1, obj2, collisionData)
	{
		// a repulsive force between the collided object is simulated. It mustn't be applied
		// for the whole amout (factor = 1) because of floating-point numbers imprecision, it causes
		// a sort of vibrating effect between the two collided objects
		let factor = 0.7;
		
		// this is a dirty trick that does the job. Check on which axis the overlapping is larger
		// this determines which happened more recently, the smaller one of course.
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
	}
}

function compareObjectTypes(obj, id)
{
	return obj.constructor.name === id.name;
}

function compareTags(obj, id)
{
	return obj.tag === id;
}
