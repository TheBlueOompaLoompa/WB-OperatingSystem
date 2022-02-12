import { Application }	from './application.js';
import { Storage }		from './storage.js';

import { Widget }		from './components/widget.js';
import { Window }		from './components/window.js';
import { Header }		from './components/header.js';
import { Label }		from './components/label.js';
import { Button }		from './components/button.js';
import { Image } 		from './components/image.js'
import { TextInput }	from './components/textInput.js';
import { Box }			from './components/box.js';
import { ListView }		from './components/listView.js';
import { Frame }		from './components/frame.js';
import { FileSelector }	from './components/fileSelector.js';

export class Wbtk {
	Application:	typeof Application;
	Storage:		typeof Storage;
	Widget:			typeof Widget;
	Window:			typeof Window;
	Header:			typeof Header;
	Label:			typeof Label;
	Button:			typeof Button;
	Image:			typeof Image;
	TextInput:		typeof TextInput;
	Box:			typeof Box;
	ListView:		typeof ListView;
	Frame:			typeof Frame;
	FileSelector:	typeof FileSelector;

	constructor () {
		this.Application	= Application;
		this.Storage		= Storage;
		this.Widget			= Widget;
		this.Window			= Window;
		this.Header			= Header;
		this.Label			= Label;
		this.Button			= Button;
		this.Image			= Image;
		this.TextInput		= TextInput;
		this.Box			= Box;
		this.ListView		= ListView;
		this.Frame			= Frame;
		this.FileSelector	= FileSelector;
	}

	Components = {}
}