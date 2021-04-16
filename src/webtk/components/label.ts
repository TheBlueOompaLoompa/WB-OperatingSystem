import { Widget } from './widget.js';

export class Label extends Widget {
	span: HTMLSpanElement;
	text: string;

	constructor(text: string) {
		super();
		this.span = document.createElement('span');
		this.span.style.display = 'block';
		this.setText(text);
		this.element.appendChild(this.span);
	}

	setText(text: string) {
		this.span.innerHTML = text;
		this.text = text;
	}
}