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
        this.container.element.style.justifyContent = 'space-between';
        this.addChild(this.container);
        this.container.setOrientation(false);
        this.setTitle(text);
        this.titleElement.element.className = 'txtcon';
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
        closeButton.element.innerHTML = '<span>✖</span>';
        closeButton.element.style.display = 'flex';
        closeButton.element.style.paddingTop = '2px';
        closeButton.element.style.paddingLeft = '4px';
        closeButton.element.style.width = '18px';
        closeButton.element.style.height = '20px';
        closeButton.element.style.marginRight = '0px';
        closeButton.element.style.transform = 'translateX(4px)';
        this.container.addChild(closeButton);
    }
}
//# sourceMappingURL=header.js.map