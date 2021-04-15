import { Widget } from "./widget.js";

export class Image extends Widget {
	image: HTMLImageElement;

	constructor(src: string, width: number, height: number) {
		super();
		
		this.image = document.createElement('img');
		this.image.src = src;
		this.image.width = width;
		this.image.height = height;
		this.setWidth(width);
		this.setHeight(height);

		this.element.appendChild(this.image);
	}
}