export function main(Wbtk){
	// Create app and window
	var application = new Wbtk.Application('wbpm');
	var window = new Wbtk.Window(application, true);
	window.header.setTitle('Package Manager');
	window.setWidth(400);

	// Create package list view
	let appsObject = JSON.parse(localStorage.getItem('apps'));
	console.log(appsObject)
	let apps = Object.keys(appsObject);

	var appList = new Wbtk.ListView();
	appList.justifyItems('start');

	apps.forEach(app => {
		console.log(app)
		appList.add(new Wbtk.Label(`${app} (<a href=${appsObject[app]}/meta.json>${appsObject[app]}</a>)`));
	});

	window.addChild(appList);
	
	// Create package URL input
	var urlInput = new Wbtk.TextInput('url');
	window.addChild(urlInput);

	// Create add button
	var button = new Wbtk.Button(() => {
		alert(`Source (${urlInput.getText()}) has been added to the sources list and will now be loaded.\nWARNING: Trying to use the app without restarting may leave your system unstable!`);
	});
	var center = new Wbtk.Box('center');
	center.addChild(button);
	button.addChild(new Wbtk.Label('Add Source'));
	button.setWidth(100);
	window.addChild(center);

	window.present();
}