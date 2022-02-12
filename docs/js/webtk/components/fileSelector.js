import { Widget } from "./widget.js";
export class FileSelector extends Widget {
    constructor(onFileSelected, mimeTypes = '*/*') {
        super();
        this.element.innerHTML = `<input type="file" accept="${mimeTypes}">`;
        this.fileInput = this.element.children[0];
        this.fileInput.oninput = function () {
            onFileSelected();
        };
    }
    getFiles() {
        return this.fileInput.files;
    }
}
//# sourceMappingURL=fileSelector.js.map