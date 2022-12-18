import { randomUUID } from './RandomUUID.js'
import { prompt } from './IO.js'

const createJSON = (NAME, DESC) => JSON.stringify({
	format_version: 2,
	header: {
		description: DESC.trim() !== '' ? DESC : '-',
		name: NAME.trim() !== '' ? NAME : '-',
		uuid: randomUUID(),
		version: [0, 0, 1],
		min_engine_version: [1, 19, 0]
	},
	modules: [
		{
			description: '',
			type: 'script',
			language: 'javascript',
			uuid: randomUUID(),
			version: [0, 0, 1],
			entry: 'scripts/index.js',
		}
	],
	dependencies: [
		{
			module_name: '@minecraft/server',
			version: '1.1.0-beta'
		},
		{
			module_name: '@minecraft/server-gametest',
			version: '1.0.0-beta'
		},
		{
			module_name: '@minecraft/server-ui',
			version: '1.0.0-beta'
		}
	]
}, null, 2)

async function createManifest() {
	const NAME = await prompt('Package Name: ')
	const DESC = await prompt('Package Description: ')
	return createJSON(NAME, DESC)
}

export { createManifest }