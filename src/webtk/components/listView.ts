import { Box } from "./box.js";
import { Widget } from "./widget.js";

export class ListView extends Widget {
	boxes: Box[] = [];
	list: Box;
	itemOrientation: boolean;
	justify: string = 'end';

	constructor() {
		super();
		this.list = new Box('start');
		this.list.setOrientation(true);
		this.element = this.list.element;
	}

	add(widget: Widget) {
		var box = new Box();
		box.setOrientation(this.itemOrientation);
		box.addChild(widget);
		box.element.style.justifyContent = this.justify;
		this.addChild(box);
		this.boxes.push(box);
	}

	remove(widget: Widget, idx: number = 0) {
		for(var i = 0; i < this.boxes.length; i++) {
			console.log(this.boxes[i].element.children[idx])
			if(widget.element == this.boxes[i].element.children[idx]){
				this.list.removeChild(this.boxes[i]);
				console.log('e')
				this.boxes.splice(i, 1);
			}
		}
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