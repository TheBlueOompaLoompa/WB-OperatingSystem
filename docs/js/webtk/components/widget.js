export class Widget {
    constructor() {
        this.element = document.createElement('div');
    }
    show() {
        this.element.style.visibility = 'visible';
        this.visible = true;
    }
    hide() {
        this.element.style.visibility = 'hidden';
        this.visible = false;
    }
    setHexpand(expand) {
        if (!this.origH)
            this.origH = this.element.style.width;
        this.hexpand = expand;
        if (expand) {
            this.element.style.width = '100%';
        }
        else {
            this.element.style.width = this.origH;
        }
    }
    setVexpand(expand) {
        if (!this.origV)
            this.origV = this.element.style.height;
        this.vexpand = expand;
        if (expand) {
            this.element.style.height = '100%';
        }
        else {
            this.element.style.height = this.origV;
        }
    }
    addChild(child) {
        this.element.appendChild(child.element);
    }
    removeChild(child) {
        this.element.removeChild(child.element);
    }
    getChild(child) {
        var output;
        for (var i = 0; i < this.element.children.length; i++) {
            if (this.element.children[i] == child.element)
                output = this.element.children;
        }
        return output;
    }
    setWidth(width) {
        this.width = width;
        this.element.style.width = width.toString() + 'px';
    }
    setHeight(height) {
        this.height = height;
        this.element.style.height = height.toString() + 'px';
    }
}
//# sourceMappingURL=widget.js.map