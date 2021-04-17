async function doGET(url) {
	return fetch(url);
}

export function main(Wbtk){
	// Create app and window
	var application = new Wbtk.Application('wbpm');
	var window = new Wbtk.Window(application, true);
	window.header.setTitle('Package Manager');
	window.setWidth(700);

	// Create package list view
	let appsObject = JSON.parse(localStorage.getItem('apps'));
	let apps = Object.keys(appsObject);

	var appList = new Wbtk.ListView();
	appList.justifyItems('start');

	function addApp(path: string, name: string){ 
		let listItem = new Wbtk.Box();
		listItem.addChild(new Wbtk.Label(`${name} (<a href=${path}/meta.json>${path}</a>)`));
		var removeButton = new Wbtk.Button(() => {
			// Show popup
			alert(`Source (${path}) has been uninstalled.\nWARNING: Uninstalling an app while it's running may leave your system unstable!`);

			// Remove package from local storage
			delete appsObject[name];
			for(var i = 0; i < apps.length; i++){
				if(name == apps[i]) apps.splice(i, 1);
			}

			appList.remove(listItem);
			localStorage.setItem('apps', JSON.stringify(appsObject));
		});
		removeButton.addChild(new Wbtk.Label('Remove'));
		listItem.addChild(removeButton)
		appList.add(listItem);
	}

	apps.forEach(app => {
		addApp(appsObject[app], app);
	});

	window.addChild(appList);
	
	// Create package URL input
	var urlInput = new Wbtk.TextInput('url');
	window.addChild(urlInput);

	// Create add button
	var button = new Wbtk.Button(async () => {
		const url = urlInput.getText();
		var response = await doGET(`${url}/meta.json`);
		var val = await response.body.getReader().read();
		var obj = JSON.parse(new TextDecoder().decode(val['value']));
		appsObject[obj.name] = url;
		addApp(url, obj.name);
		localStorage.setItem('apps', JSON.stringify(appsObject));
		alert(`Source (${url}) has been added to the sources list and will now be loaded.\nWARNING: Trying to use the app without restarting may leave your system unstable!`);
	});
	var center = new Wbtk.Box('center');
	center.addChild(button);
	button.addChild(new Wbtk.Label('Add Source'));
	button.setWidth(100);
	window.addChild(center);

	window.present();
}