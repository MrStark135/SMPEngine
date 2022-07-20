import { ctx } from '../../common.js';
import { GameObject } from './GameObject.js';

export class Circle extends GameObject
{
	constructor(x, y, radius, color)
	{
		super(x, y, radius * 2, radius * 2, color);

		this.radius = radius;
		this.center = 
		{
			x: x + radius,
			y: y + radius
		}
	}
	
	Update()
	{
		this.center.x = this.x + this.radius;
		this.center.y = this.y + this.radius;
	}
	
	Render()
	{
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		
		this.ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
		this.ctx.fill();
	}
}