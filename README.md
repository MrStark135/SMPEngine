# SMPEngine
Simplistic JavaScript Game Engine. Born to be simple!  

# How to use

## Organization

The point of this game engine is to be extremely easy to use, so I'll try to explain the most basic stuff to help you get started with the engine. The whole GameEngine is stored in `SMPEngine/`, so open it up. All you need to modify is the scripts in `InterfaceScripts/` (really just add stuff) and add all YOUR code (GameObject classes, custom GameStates etc.) to the `UserScripts` folder. Notice: The User Scripts folder is all yours, you can make as many subfolders and files inside of it as you please[^1]. Just keep it organized in some way you see appropiate.

## GameObjects
To add GameObjects to the scene by `pushing()` them to the `GameObjectsManager.gameObjects` array. That's it!
All GameObjects should inherit from `GameObject (GameObject.js)` to aviod errors. In your custom GameObject classes you just need to have two functions `Update()` and `Render()`
Read the MANUAL.txt on have to make your own custom gameObjects.

## GameStates
There are 3 built-in game states: `Playing`, `Paused` and `Gameover`. These are stored in the `UserScripts/GameStates` directory, so better don't change them. In future built-in stuff will probably be in a different place. You can add different custom states to the directory specified. In order to use them in the project you must make `transition manager` functions. These simply check some kind of input or something else and if certain condition is met, just change the `gameState` with `GameStateManager.gameState = <NEW_STATE>`

# Disclaimer
* The the current version - SMPEngine v1.0 - is ***extremely*** limited. The whole point of the engine is not to make a superpowerful game engine, because there are already many of them better optimized and more stable out there. So this is just a very simple engine, useful for getting started with game development in JS for begginers. However, the design of the engine is also very modular and just waits to be upgraded. So, happy coding.
* Also note that in this repo is already a working thing with the HTML code and a two simple GameObject types. You can download the repo and run index.html with live server (from vs code) or a different server.

[^1]: In the current version (v1.0) of the SMPEngine, the UserScripts folder contains some classes that are meant to be built-in, but in the future the `UserScripts` folder.