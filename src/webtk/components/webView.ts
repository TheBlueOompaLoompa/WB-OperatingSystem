import { Widget } from "./widget.js";

class WebView extends Widget {
    url: string;

    constructor(url?: string) {
        super();

        this.url = url;
    }

    setUrl(url: string): void {
        this.url = url;
    }

    updatePage(): void {
        this.element.innerHTML = '';

        const iframe = document.createElement('iframe') as HTMLIFrameElement;

        iframe.src = this.url;

        this.element.appendChild(iframe);
    }
}