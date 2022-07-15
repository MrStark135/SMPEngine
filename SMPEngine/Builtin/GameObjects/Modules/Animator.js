// This module is to be used internally in GameObject classes
// Instantiate it as a property in the constructor of a GameObject class on which you want the functionality
// the parent object's class has to be derived from GameObject (or further more)

// animations are passed as argument in the following format:
let exampleAnimations = 
{
	images: // here all images used by various animations need to be added. Important: MUST BE NAMED 'images'!!!
	[
		{ name: 'idleImg', src: 'Idle (32x32).png', // name is just an identifier
		frameSize: [32, 32], spacing: 0 }, 		 // frameSize is <width> x <height> in array format, spacing between sprites 
	],
	default: 'idle', // specify the initial animation as a string
	idle: { image: 'idleImg', frames: [[1, [1, 2, 3]], [2, [1, 2, 3]], [4, 3], [5, 3]], speed: 20},
	// each animation has an image (string identifier specified in this.images), and speed (number of frames before changing the sprite)
	// frames are specified in array [frame1, frame2, ...]. Each frame has <row> x <column> in array format (like [[1, 1], [1, 2], [2, 1], [2, 2]]).
	// shortcut writing of frames includes [<row>, [<col1>, <col2>, <col3> ...]] == [[<row>, <col1>], [<row>, <col2>], [<row>, <col3>] ...]
}

// IMPORTANT: The currentAnimation has to be changed externally (otherwise the sprite will stay in the default animation (user specified)),
// from the parent class that utilizes the Animator module. It has to be done like this: 
// this.Animator.currentAnimation = this.Animator.animations['animationName']; 

export class Animator
{
	constructor(parent, animationsData)
	{
		this.parent = parent;
		
		this.animations = this.#generateAnimations(animationsData);
		this.currentAnimation = this.animations[animationsData.default];
	}
	
	Update()
	{
		this.currentAnimation.Update();
	}
	
	Render()
	{
		this.currentAnimation.Render();
	}
	
	#generateAnimations(animationsData)
	{
		// temporary storage of the necessary images and their properties
		let parsedImagesData = [];
		// the return aray containing all the animations in usable format
		let animations = [];
		
		for(let entry in animationsData)
		{
			// this runs if it's images property
			if(entry === 'images')
			{
				var imagesData = animationsData[entry];
				
				for(let imageIdx = 0; imageIdx < imagesData.length; imageIdx++)
				{
					let name = imagesData[imageIdx].name;
					let frameSize = imagesData[imageIdx].frameSize;
					let spacing = imagesData[imageIdx].spacing;
					let src = imagesData[imageIdx].src;
					
					let image = new Image();
					image.src = '../../../../SMPEngine/assets/' + src;
					
					parsedImagesData[name] = 
					{
						image: image,
						frameSize: { width: frameSize[0], height: frameSize[1] },
						spacing: spacing
					};
				}
			}
			else if(entry === 'default') { continue; }
			else
			{
				let currentAnimationData = animationsData[entry];
				let imageName = currentAnimationData.image;
				
				animations[entry] = this.#generateAnimation(entry, parsedImagesData[imageName], currentAnimationData);
			}
		}
		
		console.log(animations);
		
		return animations;
	}
	
	#generateAnimation(name, imageData, animationData)
	{
		let animation = 
		{
			name: name,
			Update: Update.bind(this),
			Render: Render.bind(this),
			status:
			{
				framesElapsed: 0,
				idx: 0
			}
		};
		
		let frames = animationData.frames;
		let speed = animationData.speed;
		let parsedFrames = [];

		for(let idx = 0; idx < frames.length; idx++)
		{
			let frame = frames[idx];
			
			// if the current frame is passed in standard format, just push() it in parsed 
			if(!Array.isArray(frame[1]))
			{
				parsedFrames.push({ row: frame[0], col: frame[1] });
				continue; // to avoid executing the lines for parsing that come after
			}
			
			// if it got here, we need to parse the animation given in shorthand format
			let cols = frame[1];
			for(let i = 0; i < cols.length; i++)
			{
				parsedFrames.push({ row: frame[0], col: cols[i]});
			}
		}
		
		// these functions will be attached to the current animation
		function Update()
		{
			let status = this.currentAnimation.status;
			
			// speed is measured in frames
			if(status.framesElapsed == speed)
			{
				status.framesElapsed = 0;
				status.idx++;
				if(status.idx == parsedFrames.length) status.idx = 0;
			}
			
			status.framesElapsed++;
		}
		function Render()
		{
			// thanks to closures, this data doesn't have to be explicitly stored
			let image = imageData.image;
			let frameWidth = imageData.frameSize.width;
			let frameHeight = imageData.frameSize.height;
			let spacing = imageData.spacing;
			
			// let rows = image.width / (frameWidth + spacing);
			// let cols = image.height / (frameHeight + spacing);
			
			let status = this.currentAnimation.status;
			
			let srcx = (parsedFrames[status.idx].col - 1) * (frameWidth + spacing);
			let srcy = (parsedFrames[status.idx].row - 1) * (frameHeight + spacing);
			let srcw = frameWidth;
			let srch = frameHeight;
			
			this.parent.ctx.drawImage(image, srcx, srcy, srcw, srch, this.parent.x, this.parent.y, this.parent.width, this.parent.height);
			
		}
		
		return animation;
	}
}