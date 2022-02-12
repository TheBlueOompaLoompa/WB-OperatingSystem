import { Widget } from "./widget.js";
class WebView extends Widget {
    constructor(url) {
        super();
        this.url = url;
    }
    setUrl(url) {
        this.url = url;
    }
    updatePage() {
        this.element.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        this.element.appendChild(iframe);
    }
}
//# sourceMappingURL=webView.js.map