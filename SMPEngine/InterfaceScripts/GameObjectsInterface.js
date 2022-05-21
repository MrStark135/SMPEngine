// This is an INTERFACE between the user scripts and the Engine
// Do not modify the Game Engine (except in case of errors in the code)
// Everything you want this game engine to do should be done in these files

// Add game objects to the scene by pushing them to gameObjects array
// GameObjects inherit from GameObject located in Builtin/GameObject.js
// All behaviour for your gameObjects should be done in Update()
// change Render() for different rendering behaviour

// import ctx and canvas (for rendering): import { canvas, ctx } from "../common.js";
// import Input: import { Input } from "../Input.js";

import { Rect } from '../Builtin/GameObjects/Rect.js';
import { Circle } from '../Builtin/GameObjects/Circle.js';
import { FollowerRect } from '../UserScripts/GameObjects/FollowerRect.js';
import { ManagerObject } from '../Builtin/ManagerObjects/ManagerObject.js'
import { GameObjectsManager } from '../GameObjectsManager.js';
import { SpriteObject } from '../UserScripts/GameObjects/SpriteObject.js';

export const GameObjectsInterface = 
{
	Init()
	{		
		// reset array every Init() to avoid duplicates and garbage
		GameObjectsManager.gameObjects = [];
		
		// HERE ADD GameObjects to the scene
		GameObjectsManager.gameObjects.push(new Rect(100, 100, 100, 100, '#673'));
		GameObjectsManager.gameObjects.push(new FollowerRect(100, 100, 200, 1, '#25F'));
		GameObjectsManager.gameObjects.push(new FollowerRect(100, 100, 1, 200, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(100, 100, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(100, 200, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(200, 100, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(200, 200, 20, '#25F'));
		
		GameObjectsManager.gameObjects.push(new SpriteObject(200, 200, 100, 100, 'first.png'));
		
		GameObjectsManager.gameObjects.push(new ManagerObject());
		// ...
		// ...
	}
}