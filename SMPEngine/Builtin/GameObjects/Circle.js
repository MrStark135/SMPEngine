import { GameObject } from './GameObject.js';

export class Circle extends GameObject
{
	constructor(x, y, radius, color)
	{
		super(x, y, color);
		
		this.radius = radius;
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