import { ctx } from "../../common.js";

export class GameObject
{
	constructor(x, y, color)
	{
		// position
		this.x = x;
		this.y = y;

		// fill color
		this.color = color;
		
		// every object needs a renderer
		this.ctx = ctx;
	}
	
	Update()
	{
		// in derived classes, add functionality
	}
	Render()
	{
		// default Render()
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, 50, 50);
	}
}