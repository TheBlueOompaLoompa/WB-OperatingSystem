import { Widget } from "./widget.js";

export class TextInput extends Widget {
	input: HTMLInputElement;

	constructor(type: string) {
		super();

		// Create input
		this.input = document.createElement('input');
		this.input.type = type;
		this.input.className = ' textInput';

		this.element.appendChild(this.input);
	}

	getText() {
		return this.input.value;
	}
}