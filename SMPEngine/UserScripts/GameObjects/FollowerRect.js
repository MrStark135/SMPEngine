import { Rect } from "../../Builtin/GameObjects/Rect.js";

import { Input } from "../../Input.js"

export class FollowerRect extends Rect
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