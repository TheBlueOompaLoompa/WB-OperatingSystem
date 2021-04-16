import { Widget } from "./widget.js";

export class Box extends Widget {
	constructor(moveTowards: string = 'end') {
		super();
		this.element.style.display = 'flex';
		this.element.style.justifyContent = moveTowards;
	}

	setOrientation(orientation: boolean) {
		this.element.style.flexDirection = orientation ? 'column' : 'row';
	}
}