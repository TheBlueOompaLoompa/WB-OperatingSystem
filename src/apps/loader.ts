import { isTemplateExpression } from "../../node_modules/typescript/lib/typescript";
import { Wbtk } from "../webtk/wbtk";

async function doGET(url) {
	return fetch(url);
}

export const ApplicationLoader = {
	load: async function() {
		const apps = JSON.parse(localStorage.getItem('apps'));

		const defaultApps = {
			wbpm: '/js/apps/wbpm',
		};

		var temp = apps ? apps : defaultApps;
		localStorage.setItem('apps', JSON.stringify(temp));

		var output = [];

		var keys = Object.keys(temp);

		for(var i = 0; i < keys.length; i++){
			var response = await doGET(`${temp[keys[i]]}/meta.json`);
			var val = await response.body.getReader().read();
			var obj = JSON.parse(new TextDecoder().decode(val['value']));

			// Load script into header
			var script = document.createElement('script');
			script.src = `${temp[keys[i]]}/main.js`
			var { main } = await import(`${temp[keys[i]]}/main.js`);

			obj['main'] = main;

			obj['path'] = temp[keys[i]];
			output.push(obj);
		}

		return output;
	}
}