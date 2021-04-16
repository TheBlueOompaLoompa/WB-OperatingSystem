import { Box } from './box.js';
import { Button } from './button.js';
import { Label } from './label.js';
import { Widget } from './widget.js';
import { Window } from './window.js';

export class Header extends Widget {
	title: string;
	showControls: boolean = false;
	container: Box;
	titleElement: Label;
	parentWindow: Window;
	
	constructor(text: string, showControls: boolean, window: Window) {
		super();

		this.title = text;
		this.showControls = showControls;

		this.element.id = text + 'header';
		this.element.className = 'header';

		this.container = new Box();
		this.addChild(this.container);
		this.container.setOrientation(false);

		this.setTitle(text);

		this.parentWindow = window;

		this.setShowControls(showControls);
	}

	setTitle(title: string) {
		if(!this.titleElement) {
			this.titleElement = new Label(title);
			this.container.addChild(this.titleElement)
		}else {
			this.titleElement.setText(title);
		}
	}

	setShowControls(show: boolean) {
		// Create close button
		var closeButton = new Button(() => {this.parentWindow.close()});
		closeButton.element.innerText = '🮛';
		closeButton.element.style.width = '25px';
		closeButton.element.style.height = '25px';
		this.container.addChild(closeButton);
	}
}