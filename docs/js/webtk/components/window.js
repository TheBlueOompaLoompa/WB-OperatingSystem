import { Widget } from './widget.js';
import { Header } from './header.js';
export class Window extends Widget {
    constructor(application, doHeader = true, draggable = true) {
        super();
        this.element.className = 'window';
        this.element.id = application.uid;
        var draggable = draggable ? draggable : false;
        if (doHeader) {
            this.header = new Header(application.uid, true, this);
            this.addChild(this.header);
            draggable = true;
        }
        if (draggable)
            this.dragElement(this.element, this.header.element);
    }
    dragElement(elmnt, hdr) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (hdr) {
            hdr.onmousedown = dragMouseDown;
            hdr.ontouchstart = dragMouseDown;
        }
        else {
            elmnt.onmousedown = dragMouseDown;
            elmnt.ontouchstart = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            e = e['changedTouches'] ? e['changedTouches'][0] : e;
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
    setPosition(x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }
    present() {
        document.getElementById('windows').appendChild(this.element);
    }
    close() {
        document.getElementById('windows').removeChild(this.element);
    }
}
//# sourceMappingURL=window.js.map