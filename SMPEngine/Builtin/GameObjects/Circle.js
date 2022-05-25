import { ctx } from '../../common.js';

export class Circle
{
	constructor(x, y, radius, color)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		
		this.color = color;
		this.ctx = ctx
	}
	
	Update()
	{
		
	}
	
	Render()
	{
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		
		this.ctx.arc(this.x, this.y, this.radius / 2, 0, Math.PI * 2);
		this.ctx.fill();
	}
}