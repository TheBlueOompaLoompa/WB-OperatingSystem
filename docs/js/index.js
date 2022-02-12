import { Desktop } from './desktop.js';
import { ApplicationLoader as Loader } from './apps/loader.js';
var apps = Loader.load();
const desktop = new Desktop();
desktop.taskbar.showApps(apps);
desktop.show();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js')
        .then(function (registration) {
        registration.addEventListener('updatefound', function () {
            var installingWorker = registration.installing;
            console.log('A new service worker is being installed:', installingWorker);
        });
    })
        .catch(function (error) {
        console.log('Service worker registration failed:', error);
    });
}
else {
    console.log('Service workers are not supported.');
}
//# sourceMappingURL=index.js.map