import { Desktop } from './desktop.js';
import { ApplicationLoader as Loader } from './apps/loader.js';
var apps = Loader.load();
const desktop = new Desktop();
desktop.taskbar.showApps(apps);
desktop.show();
//# sourceMappingURL=index.js.map