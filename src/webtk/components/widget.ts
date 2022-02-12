export class Widget {
	element: HTMLElement;
	width: number;
	height: number;
	visible: boolean;
	hexpand: boolean;
	vexpand: boolean;

	constructor () {
		this.element = document.createElement('div');
	}

	/* Show and hide */
	show(): void {
		this.element.style.visibility = 'visible';
		this.visible = true;
	}

	hide(): void {
		this.element.style.visibility = 'hidden';
		this.visible = false;
	}

	origH: string;
	origV: string;

	setHexpand(expand: boolean): void {
		if(!this.origH) this.origH = this.element.style.width;
		this.hexpand = expand;
		if(expand) {
			this.element.style.width = '100%';
		}else {
			this.element.style.width = this.origH;
		}
	}

	setVexpand(expand: boolean): void {
		if(!this.origV) this.origV = this.element.style.height;
		this.vexpand = expand;
		if(expand) {
			this.element.style.height = '100%';
		}else {
			this.element.style.height = this.origV;
		}
	}

	/* Allow adding and removing child components */
	addChild(child: Widget): void {
		this.element.appendChild(child.element);
	}

	removeChild(child: Widget): void {
		this.element.removeChild(child.element);
	}

	getChild(child: Widget): Widget {
		var output;
		for(var i = 0; i < this.element.children.length; i++) {
			if(this.element.children[i] == child.element) output = this.element.children;
		}
		return output;
	}

	setWidth(width: number): void {
		this.width = width;
		this.element.style.width = width.toString() + 'px';
	}

	setHeight(height: number): void {
		this.height = height;
		this.element.style.height = height.toString() + 'px';
	}
}