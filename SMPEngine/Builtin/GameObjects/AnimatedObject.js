import { Game } from '../../Game.js';
import { GameObject } from './GameObject.js';
import { Animator } from './Modules/Animator.js';

export class AnimatedObject extends GameObject
{
	constructor(x, y, width, height, animations = null)
	{
		super(x, y, width, height, '#000');
		
		this.Animator = new Animator(this, animations);
	}
	
	Update()
	{
		this.Animator.Update();
	}
	
	Render()
	{
		this.Animator.Render();
	}
}