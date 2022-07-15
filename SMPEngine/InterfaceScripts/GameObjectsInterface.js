// This is an INTERFACE between the user scripts and the Engine
// Do not modify the Game Engine (except in case of errors in the code)
// Everything you want this game engine to do should be done in these files

// Add game objects to the scene by pushing them to gameObjects array
// GameObjects inherit from GameObject located in Builtin/GameObject.js
// All behaviour for your gameObjects should be done in Update()
// change Render() for different rendering behaviour

// import ctx and canvas (for rendering): import { canvas, ctx } from "../common.js";
// import Input: import { Input } from "../Input.js";

import { Circle } from '../Builtin/GameObjects/Circle.js';
import { FollowerRect } from '../UserScripts/GameObjects/FollowerRect.js';
import { GarbageCollector } from '../Builtin/ManagerObjects/GarbageCollector.js'
import { GameObjectsManager } from '../GameObjectsManager.js';
import { SpriteObject } from '../Builtin/GameObjects/SpriteObject.js';
import { GameObject } from '../Builtin/GameObjects/GameObject.js';
import { AnimatedObject } from '../Builtin/GameObjects/AnimatedObject.js';
import { CollisionManager } from '../Builtin/ManagerObjects/CollisionManager.js';

export const GameObjectsInterface = 
{
	Init()
	{		
		// reset array every Init() to avoid duplicates and garbage
		GameObjectsManager.gameObjects = [];
		
		// HERE ADD GameObjects to the scene
		GameObjectsManager.gameObjects.push(new GameObject(100, 100, 100, 100, '#673'));
		GameObjectsManager.gameObjects.push(new FollowerRect(100, 100, 200, 1, '#25F'));
		GameObjectsManager.gameObjects.push(new FollowerRect(100, 100, 1, 200, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(100, 100, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(100, 200, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(200, 100, 20, '#25F'));
		GameObjectsManager.gameObjects.push(new Circle(200, 200, 20, '#25F'));
		
		GameObjectsManager.gameObjects.push(new SpriteObject(100, 200, 190, 190, 'first.png'));
		GameObjectsManager.gameObjects.push(new AnimatedObject(300, 200, 32, 32,
		{
			images:
			[
				{ name: 'idle', src: 'Ninja Frog/Idle (32x32).png', frameSize: [32, 32], spacing: 0 },
				{ name: 'jump', src: 'Ninja Frog/Jump (32x32).png', frameSize: [32, 32], spacing: 0 },
				{ name: 'double jump', src: 'Ninja Frog/Double Jump (32x32).png', frameSize: [32, 32], spacing: 0 }
			],
			default: 'idle',
			idle: { image: 'idle', frames: [[1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]], speed: 4},
			doubleJump: { image: 'double jump', frames: [[1, [1, 2, 3, 4, 5, 6]]], speed: 3},
			jump: { image: 'jump', frames: [[1, 1]], speed: 0},
		}));
		
		GameObjectsManager.gameObjects.push(new GarbageCollector());
		GameObjectsManager.gameObjects.push(new CollisionManager('objectType', FollowerRect, AnimatedObject));
		// ...
		// ...
	}
}