import { GameObject } from "./GameObject.js";

export class Cube extends GameObject
{
	constructor(x, y, width, color)
	{
		super(x, y, width, width, color);
	}
	
	Update()
	{
		this.x++;
		this.y--;
	}
}

import { Input } from "../../Input.js"
export class FollowerCube extends Cube
{
	constructor(x, y, width, color)
	{
		super(x, y, width, color);
	}
	
	Update()
	{
		this.x = Input.mouse.X;
		this.y = Input.mouse.Y;
	}
	
	Render()
	{
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		
		this.ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
		this.ctx.fill();
	}
}