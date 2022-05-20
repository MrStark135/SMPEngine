// This is an INTERFACE between the user scripts and the Engine
// Do not modify the Game Engine (except in case of errors in the code)
// Everything you want this game engine to do should be done in these files

// Add game objects to the scene by pushing them to gameObjects array
// GameObjects inherit from GameObject located in Builtin/GameObject.js
// All behaviour for your gameObjects should be done in Update()
// change Render() for different rendering behaviour

// import ctx and canvas (for rendering): import { canvas, ctx } from "../common.js";
// import Input: import { Input } from "../Input.js";

import { Cube, FollowerCube } from '../Builtin/GameObjects/Cube.js';
import { ManagerObject } from '../Builtin/ManagerObjects/ManagerObject.js'
import { GameObjectsManager } from '../GameObjectsManager.js';

export const GameObjectsInterface = 
{
	Init()
	{		
		// reset array every Init() to avoid duplicates and garbage
		GameObjectsManager.gameObjects = [];
		
		// HERE ADD GameObjects to the scene
		GameObjectsManager.gameObjects.push(new Cube(100, 100, 200, '#673'));
		GameObjectsManager.gameObjects.push(new FollowerCube(100, 100, 200, '#25F'));
		GameObjectsManager.gameObjects.push(new ManagerObject());
		// ...
		// ...
	}
}