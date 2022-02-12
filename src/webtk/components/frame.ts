import { Widget } from "./widget.js";

export class Frame extends Widget {
	constructor() {
		super();
	}

	setChild(widget: Widget): void {
        this.clear();
        
        this.addChild(widget);
    }

    clear(): void {
        this.element.innerHTML = '';
    }
}