export class Storage {
    constructor(app) {
        this.app = app;
    }
    setItem(key, value) {
        localStorage.setItem(`${this.app.uid}/${key}`, value);
    }
    getItem(key) {
        return localStorage.getItem(`${this.app.uid}/${key}`);
    }
}
//# sourceMappingURL=storage.js.map