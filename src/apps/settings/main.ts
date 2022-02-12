import { Wbtk } from "../../webtk/wbtk";

export function main(Wbtk: Wbtk){
	// Create app and window
	var application = new Wbtk.Application('settings');
	var window = new Wbtk.Window(application, true);
	const storage = new Wbtk.Storage(application);
	window.header.setTitle('Settings');
	window.setWidth(680);
	window.setHeight(400);

	var box = new Wbtk.Box();
	box.setOrientation(false);

	var settingsArea = new Wbtk.Frame();
	settingsArea.setHexpand(true);

	const categoryDef = [
		{name: 'Background', callback: () => {
			let fileSelector = new Wbtk.FileSelector(onUploadFile, 'image/*');
			async function onUploadFile() {
				const files = fileSelector.getFiles();
				const reader = new FileReader();
				reader.onloadend = () => {
					document.querySelector<HTMLImageElement>('.background').src = String(reader.result);
					storage.setItem('background', String(reader.result));
				}

				reader.readAsDataURL(files[0])
			}
			settingsArea.setChild(fileSelector);
		}},
		/*{name: '', callback: () => {

		}},*/
	];

	var categoryList = new Wbtk.ListView();
	box.addChild(categoryList);
	box.addChild(settingsArea);

	categoryDef.forEach(category => {
		let but = new Wbtk.Button(category.callback);
		but.addChild(new Wbtk.Label(category.name));
		categoryList.add(but);
	});

	window.addChild(box);

	window.present();
}