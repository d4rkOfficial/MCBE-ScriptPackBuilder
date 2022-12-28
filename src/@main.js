import { print, ask, choose, askYesNo } from './cli.js'
import { testEmptyFolder, createFolder } from './fs.js'
import { createManifest } from './manifest.js'
import { runCommand, downloadIcon, randomUUID, printLogo } from './utils.js'
import { createHelloWorldJS } from './helloworld.js'

(async function main() {
	
	const server = false
	
	const isEmptyFolder = await testEmptyFolder()
	if (!isEmptyFolder) {
		print('You should initialize your project in an empty folder!')
		if (askYesNo('Do you want to create an empty folder? [Y/n] ')) {
			const folder_name = await ask('Folder Name: ')
			if (folder_name.trim() === '') return;
			await createFolder(folder_name)
			return main()
		}
		return
	}

	await printLogo()

	const pack_name = await ask(
		'Package Name: ')
	const pack_desc = await ask(
		'Package Description: ')
	const pack_auth = await ask(
		'Package Author: ')
	const mcbe_vers = await choose(
		'Choose Minecraft Version: ', [
			'(1) 1.19.60.22+',
			'(2) 1.19.30.25',
			'(3) 1.16.210+', // -> 1 | 2 | 3
			'Default: (1)'
	], {
		DEFAULT: 1 //latest engine version as default
	})
	
	if (!([1, 2].includes(mcbe_vers))) {
		print('This version is not temporarily supported.')
		//versions under 1.19.30.25 is not supported
		return
	}

	print('\x1B[37mGenerating...')

  print('\x1B[32mSetting up scripts/index.js')
	await createFolder('scripts')
	await createHelloWorldJS(mcbe_vers)
	print('\x1B[37mdone.')
	
	print('\x1B[32mSetting up manifest.json')
	let headerUUID, moduleUUID
	await createManifest(mcbe_vers, pack_name, pack_desc, pack_auth,
	  headerUUID = randomUUID(),
	  moduleUUID = randomUUID())
	print('\x1B[37mdone.')
	
	print('\x1B[32mDownloading pack_icon.png')
	try {
		await downloadIcon()
		print('\x1B[37mSuccess!')
	} catch {
		print('\x1B[31mNetwork Error: Unable to download default pack_icon.png')
	}
	
	print('\x1B[32mInstalling Type Docs')
	try {
	await runCommand('npm i @minecraft/server@1.1.0-beta.1.19.60-preview.24')
	await runCommand('npm i @minecraft/server-gametest@1.0.0-beta.1.19.60-preview.24')
	await runCommand('npm i npm i @minecraft/server-ui@1.0.0-beta.1.19.60-preview.24')
	
	if (server) { /*#__pure__*/
	  await runCommand('npm i @minecraft/server-net@latest')
	  await runCommand('npm i @minecraft/server-admin@latest')
	}
	} catch {}

	print('\x1B[37mFinished! \n')

})().finally(() => {
	process.exit(0)
})