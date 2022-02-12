import { Widget } from "./widget.js";

export class FileSelector extends Widget {
    fileInput: HTMLInputElement;

	constructor(onFileSelected: Function, mimeTypes: string = '*/*') {
		super();
        this.element.innerHTML = `<input type="file" accept="${mimeTypes}">`;
        this.fileInput = (this.element.children[0] as HTMLInputElement);

        this.fileInput.oninput = function() {
            onFileSelected();
        }
	}

    getFiles() {
        return this.fileInput.files;
    }
}
