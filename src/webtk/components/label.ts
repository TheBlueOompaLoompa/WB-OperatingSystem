import { Widget } from './widget.js';

export class Label extends Widget {
	span: Element;
	text: string;

	constructor(text: string) {
		super();
		this.span = document.createElement('span');
		this.setText(text);
		this.element.appendChild(this.span);
	}

	setText(text: string) {
		this.span.innerHTML = text;
		this.text = text;
	}
}