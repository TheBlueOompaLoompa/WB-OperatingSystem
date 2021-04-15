import { Widget } from './widget.js';

export class Header extends Widget {
	title: string;
	showControls: boolean = false;
	constructor(uid: string, showControls: boolean) {
		super();

		this.title = uid;
		this.showControls = showControls;

		this.element.id = uid + 'header';
		this.element.className = 'header';

		this.setTitle(uid);
	}

	setTitle(title: string) {
		this.element.innerHTML = title;
	}
}