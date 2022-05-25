import { ctx } from "../../common.js";

export class GameObject
{
	constructor(x, y, width, height, color)
	{
		// position and dimensions
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		
		// fill color
		this.color = color;
		
		// every object needs a pointer to the renderer
		this.ctx = ctx;
	}
	
	Update()
	{
		// In derived classes this will be overriden with real behaviour
	}
	
	Render()
	{		
		// default Render()
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}