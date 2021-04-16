export class Widget {
	element;
	width: number;
	height: number;
	visible: boolean;

	constructor () {
		this.element = document.createElement('div');
	}

	/* Show and hide */
	show() {
		this.element.style.visibility = 'visible';
		this.visible = true;
	}

	hide() {
		this.element.style.visibility = 'hidden';
		this.visible = false;
	}

	/* Allow adding and removing child components */
	addChild(child: Widget) {
		this.element.appendChild(child.element);
	}

	removeChild(child: Widget) {
		this.element.removeChild(child.element);
	}

	getChild(child: Widget) {
		var output;
		for(var i = 0; i < this.element.children.length; i++) {
			if(this.element.children[i] == child.element) output = this.element.children;
		}
		return output;
	}

	setWidth(width: number) {
		this.width = width;
		this.element.style.width = width.toString() + 'px';
	}

	setHeight(height: number) {
		this.height = height;
		this.element.style.height = height.toString() + 'px';
	}
}