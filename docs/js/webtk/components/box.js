import { Widget } from "./widget.js";
export class Box extends Widget {
    constructor(moveTowards = 'end') {
        super();
        this.element.style.display = 'flex';
        this.element.style.justifyContent = moveTowards;
    }
    setOrientation(orientation) {
        this.element.style.flexDirection = orientation ? 'column' : 'row';
    }
}
//# sourceMappingURL=box.js.map