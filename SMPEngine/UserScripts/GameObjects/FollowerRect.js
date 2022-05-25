import { GameObject } from "../../Builtin/GameObjects/GameObject.js";

import { Input } from "../../Input.js"

export class FollowerRect extends GameObject
{
	constructor(x, y, width, height, color)
	{
		super(x, y, width, height, color);
	}
	
	Update()
	{
		this.x = Input.mouse.X;
		this.y = Input.mouse.Y;
	}
}