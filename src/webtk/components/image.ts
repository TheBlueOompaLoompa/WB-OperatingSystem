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

export class SVGImage extends Widget {
	image;

	constructor(innerContent: string, width: number, height: number, stroke: string, fill: string) {
		super();
		this.image = document.createElement('svg');
		this.image.innerHTML = innerContent;
		this.image.width  = width;
		this.image.height = height;
		this.image.setAttribute('stroke', stroke);
		this.image.setAttribute('fill', fill);
		this.setWidth(width);
		this.setHeight(height);

		this.element.appendChild(this.image);
	}
}