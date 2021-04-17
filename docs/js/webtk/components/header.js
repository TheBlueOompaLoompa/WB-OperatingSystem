import { Box } from './box.js';
import { Button } from './button.js';
import { Label } from './label.js';
import { Widget } from './widget.js';
export class Header extends Widget {
    constructor(text, showControls, window) {
        super();
        this.showControls = false;
        this.title = text;
        this.showControls = showControls;
        this.element.id = text + 'header';
        this.element.className = 'header';
        this.container = new Box();
        this.addChild(this.container);
        this.container.setOrientation(false);
        this.setTitle(text);
        this.parentWindow = window;
        this.setShowControls(showControls);
    }
    setTitle(title) {
        if (!this.titleElement) {
            this.titleElement = new Label(title);
            this.container.addChild(this.titleElement);
        }
        else {
            this.titleElement.setText(title);
        }
    }
    setShowControls(show) {
        var closeButton = new Button(() => { this.parentWindow.close(); });
        closeButton.element.innerText = '🮛';
        closeButton.element.style.width = '25px';
        closeButton.element.style.height = '25px';
        this.container.addChild(closeButton);
    }
}
//# sourceMappingURL=header.js.map