// This module is to be used internally in GameObject classes
// Instantiate it as a property in the constructor of a GameObject class on which you want the functionality
// the parent object's class has to be derived from GameObject (or further more)

export class SpriteRenderer
{
	constructor(parent, imageSrc)
	{
		this.parent = parent;
		
		this.image = new Image();
		this.image.src = '../../../../SMPEngine/assets/' + imageSrc;
	}
	
	Update()
	{
		
	}
	
	Render()
	{
		this.parent.ctx.drawImage(this.image, this.parent.x, this.parent.y, (this.parent.width / 2), (this.parent.height / 2));
	}
}