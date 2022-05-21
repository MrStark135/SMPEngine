import { Rect } from '../../Builtin/GameObjects/Rect.js';

export class SpriteObject extends Rect
{
	constructor(x, y, width, height, imageSrc)
	{
		super(x, y, width, height, '#000');
		
		this.image = new Image();
		this.image.src = '../../../SMPEngine/assets/' + imageSrc;
	}
	
	Update()
	{
		// default Update() is empty
	}
	
	Render()
	{
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.image.height * (this.width / this.image.width));
	}
}