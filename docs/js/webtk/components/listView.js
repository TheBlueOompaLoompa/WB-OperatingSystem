import { Box } from "./box.js";
import { Widget } from "./widget.js";
export class ListView extends Widget {
    constructor() {
        super();
        this.boxes = [];
        this.justify = 'end';
        this.list = new Box('start');
        this.list.setOrientation(true);
        this.element = this.list.element;
    }
    add(widget) {
        var box = new Box();
        box.setOrientation(this.itemOrientation);
        box.addChild(widget);
        box.element.style.justifyContent = this.justify;
        this.addChild(box);
        this.boxes.push(box);
    }
    remove(widget, idx = 0) {
        for (var i = 0; i < this.boxes.length; i++) {
            console.log(this.boxes[i].element.children[idx]);
            if (widget.element == this.boxes[i].element.children[idx]) {
                this.list.removeChild(this.boxes[i]);
                this.boxes.splice(i, 1);
            }
        }
    }
    setListOrientation(orientation) {
        this.list.setOrientation(orientation);
    }
    justifyItems(position) {
        this.justify = position;
        this.boxes.forEach(box => {
            box.element.style.justifyContent = position;
        });
    }
    setItemOrientation(orientation) {
        this.itemOrientation = orientation;
        this.boxes.forEach(box => {
            box.setOrientation(orientation);
        });
    }
}
//# sourceMappingURL=listView.js.map