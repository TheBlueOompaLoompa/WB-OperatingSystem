import { Application } from './application.js';

import { Widget }	from './components/widget.js';
import { Window }		from './components/window.js';
import { Header }		from './components/header.js';
import { Label }		from './components/label.js';
import { Button }		from './components/button.js';
import { Image } 		from './components/image.js'
import { TextInput }	from './components/textInput.js';
import { Box }			from './components/box.js';
import { ListView }		from './components/listView.js';

export class Wbtk {
	Application
	Widget
	Window
	Header
	Label
	Button
	Image
	TextInput
	Box
	ListView

	constructor () {
		this.Application = Application;
		this.Widget = Widget;
		this.Window = Window;
		this.Header = Header;
		this.Label = Label;
		this.Button = Button;
		this.Image = Image;
		this.TextInput = TextInput;
		this.Box = Box;
		this.ListView = ListView;
	}

	Components = {
		
	}
}