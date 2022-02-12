import { Widget } from "./widget.js";
export class Frame extends Widget {
    constructor() {
        super();
    }
    setChild(widget) {
        this.clear();
        this.addChild(widget);
    }
    clear() {
        this.element.innerHTML = '';
    }
}
//# sourceMappingURL=frame.js.map