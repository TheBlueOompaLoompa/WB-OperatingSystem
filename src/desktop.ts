import { Button } from './webtk/components/button.js';
import { Image } from './webtk/components/image.js';
import { Label } from './webtk/components/label.js';
import { Window } from './webtk/components/window.js';

import { Application } from './webtk/application.js';
import { Wbtk } from './webtk/wbtk.js';

export class Desktop {
	taskbar: Taskbar;

	constructor() {

		this.taskbar = new Taskbar();
	}

	show() {
		this.taskbar.show();
		document.getElementById('windows').appendChild(this.taskbar.element);
	}
}

class Taskbar extends Window {
	start: Startmenu;
	startButton: Button;

	constructor() {
		super(new Application('taskbar'), false, false);

		this.start = new Startmenu();

		this.startButton = new Button((ev) => { this.start.visible ? this.start.hide() : this.start.show() });
		this.startButton.addChild(new Image('http://www.pngmart.com/files/3/Windows-XP-PNG-Photos.png', 25, 25));
		this.startButton.setWidth(25);
		this.startButton.setHeight(25);
		this.addChild(this.startButton);

		document.getElementById('windows').appendChild(this.start.element);
	}

	async showApps(apps) {
		var val = await apps;
		this.start.showApps(val);
	}
}

class Startmenu extends Window {
	startButton: Button;

	constructor() {
		super(new Application('startmenu'), false, false);

		this.setPosition(0, 32);
		this.hide();

		this.addChild(new Label('Start Menu'));
	}

	showApps(apps) {
		apps.forEach(app => {
			var button = new Button(() => {
				app.main(new Wbtk())
			});

			button.addChild(new Label(app.title))

			this.addChild(button);
		});
	}
}