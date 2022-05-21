import { GameObject } from "./GameObject.js";

export class Rect extends GameObject
{
	constructor(x, y, width, height, color)
	{
		super(x, y, color);
		
		this.width = width;
		this.height = height;
	}
	
	Update()
	{

	}
	
	Render()
	{		
		// default Render()
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}