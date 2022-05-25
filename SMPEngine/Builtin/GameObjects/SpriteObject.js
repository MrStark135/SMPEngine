import { GameObject } from './GameObject.js';
import { SpriteRenderer } from './Modules/SpriteRenderer.js';

export class SpriteObject extends GameObject
{
	constructor(x, y, width, height, imageSrc)
	{
		super(x, y, width, height, '#000');
		
		this.SpriteRenderer = new SpriteRenderer(this, imageSrc);
		
		this.width = (width === 'auto')? this.SpriteRenderer.image.width : width;
		this.height = (height === 'auto')? this.SpriteRenderer.image.height : height;
	}
	
	Update()
	{
		this.SpriteRenderer.Update();
	}
	
	Render()
	{
		this.SpriteRenderer.Render();
	}
}