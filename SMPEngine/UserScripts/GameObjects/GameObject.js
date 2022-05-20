import { ctx } from "../../common.js";

export class GameObject
{
	constructor(x, y, width, height, color)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		
		this.ctx = ctx;
	}
	
	Update()
	{
		// in derived classes, add functionality
	}
	Render()
	{
		// default Redner()
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}