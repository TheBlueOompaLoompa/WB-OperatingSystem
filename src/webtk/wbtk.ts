import { Application } from './application.js';

import { Widget }	from './components/widget.js';
import { Window }	from './components/window.js';
import { Header }	from './components/header.js';
import { Label }	from './components/label.js';
import { Button }	from './components/button.js';
import { Image } 	from './components/image.js'

export class Wbtk {
	Application
	Widget
	Window
	Header
	Label
	Button
	Image

	constructor () {
		this.Application = Application;
		this.Widget = Widget;
		this.Window = Window;
		this.Header = Header;
		this.Label = Label;
		this.Button = Button;
		this.Image = Image;
	}

	Components = {
		
	}
}