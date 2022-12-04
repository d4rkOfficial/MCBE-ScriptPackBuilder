import { generateRandomUUID } from './generateRandomUUID.js'
import { print, prompt } from './IO-stream.js'

const Questions = {
	name: 'Package Name: ',
	desc: 'Package Desc: '
}

const manifestTemplates = {
	['1.19.60.22']: {
		async generate() {
			const
				pack_name = await prompt(Questions.name),
				pack_desc = await prompt(Questions.desc)
			return JSON.stringify({
				format_version: 2,
				header: {
					description: pack_desc ?? '-',
					name: pack_name ?? '-',
					uuid: generateRandomUUID(),
					version: [0, 0, 1],
					min_engine_version: [1, 19, 0]
				},
				modules: [
					{
						description: '',
						type: 'script',
						language: 'javascript',
						uuid: generateRandomUUID(),
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
						version: '1.1.0-beta'
          },
					{
						module_name: '@minecraft/server-ui',
						version: '1.1.0-beta'
          }
				]
			}, null, 2)
		}
	},
	['1.19.30.0']: {
		async generate() {
			const
				pack_name = await prompt(Questions.name),
				pack_desc = await prompt(Questions.desc)
			return JSON.stringify({
				format_version: 2,
				header: {
					description: pack_desc ?? '-',
					name: pack_name ?? '-',
					uuid: generateRandomUUID(),
					version: [0, 0, 1],
					min_engine_version: [1, 19, 0]
				},
				modules: [
					{
						description: '',
						type: 'script',
						language: 'javascript',
						uuid: generateRandomUUID(),
						version: [0, 0, 1],
						entry: 'scripts/index.js',
						}
					],
				dependencies: [
					{
						module_name: '@minecraft/server',
						version: '1.0.0-beta'
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
		}
	}
}

export { manifestTemplates }