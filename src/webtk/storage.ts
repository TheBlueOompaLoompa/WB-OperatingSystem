import { Application } from './application.js'

export class Storage {
    app: Application

    constructor(app: Application) {
        this.app = app;
        
    }

    setItem(key: string, value: string) {
        localStorage.setItem(`${this.app.uid}/${key}`, value);
    }

    getItem(key: string) {
        return localStorage.getItem(`${this.app.uid}/${key}`);
    }
}