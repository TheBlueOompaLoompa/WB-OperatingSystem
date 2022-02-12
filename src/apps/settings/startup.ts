export function startup(Wbtk) {
    let application = new Wbtk.Application('settings');
    const storage = new Wbtk.Storage(application);

    document.querySelector<HTMLImageElement>('.background').src = String(storage.getItem('background'));

    window.onresize = function(){
        const w = window.outerWidth;
        const h = window.outerHeight;
    }
}