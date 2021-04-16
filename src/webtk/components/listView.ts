import { Box } from "./box.js";
import { Widget } from "./widget.js";

export class ListView extends Widget {
	boxes: Box[] = [];
	list: Box;
	itemOrientation: boolean;
	justify: string = 'end';

	constructor() {
		super();
		this.list = new Box();
		this.addChild(this.list);
	}

	add(widget: Widget) {
		var box = new Box();
		box.setOrientation(this.itemOrientation);
		box.addChild(widget);
		box.element.style.justifyContent = this.justify;
		this.addChild(box);
		this.boxes.push(box);
	}

	setListOrientation(orientation: boolean) {
		this.list.setOrientation(orientation);
	}

	justifyItems(position: string) {
		this.justify = position;
		this.boxes.forEach(box => {
			box.element.style.justifyContent = position;
		});
	}

	setItemOrientation(orientation: boolean) {
		this.itemOrientation = orientation;

		this.boxes.forEach(box => {
			box.setOrientation(orientation);
		})
	}
}