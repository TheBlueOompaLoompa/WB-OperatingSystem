import { Widget } from "./widget.js";

export class Button extends Widget {
	constructor(onclick) {
		super();

		this.element.onclick = onclick;
		this.element.className += ' button';
	}
}