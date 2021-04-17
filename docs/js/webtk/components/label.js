import { Widget } from './widget.js';
export class Label extends Widget {
    constructor(text) {
        super();
        this.span = document.createElement('span');
        this.span.style.display = 'block';
        this.setText(text);
        this.element.appendChild(this.span);
    }
    setText(text) {
        this.span.innerHTML = text;
        this.text = text;
    }
}
//# sourceMappingURL=label.js.map