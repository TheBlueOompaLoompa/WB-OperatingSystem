export default class App {
    name: string;
    title: string;
    description: string;
    keywords: string[];

    icon: string;

    main: Function;
    path: string;
    style: string;
    sysinit?: Function;
    
    gui: boolean;
}