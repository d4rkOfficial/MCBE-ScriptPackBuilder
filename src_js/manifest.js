import { createFile } from './fs.js'

const V = { //Namespace(enum) V refering to mcbe script engine versions
	"1.19.60.22+": 1,
	"1.19.30.25": 2,
	"1.16.210+": 3
}

async function createManifest(mcbe_vers, name, desc, auth, headerUUID, moduleUUID) {
	let manifest
	switch (mcbe_vers) {
		case V['1.19.60.22+']: {
			manifest = JSON.stringify({
				format_version: 2,

				header: {
					description: desc.trim() !== '' ? desc : '-',
					name: name.trim() !== '' ? name : '-',
					uuid: headerUUID,
					version: [0, 0, 1],
					min_engine_version: [1, 19, 0]
				},

				modules: [
					{
						description: '',
						type: 'script',
						language: 'javascript',
						uuid: moduleUUID,
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
				],

				metadata: {
					authors: [
						auth.trim() !== '' ? auth : '-'
					]
				}

			}, null, 2)
			break
		}

		case V['1.19.30.25']: {
			manifest = JSON.stringify({

				format_version: 2,

				header: {
					description: desc.trim() !== '' ? desc : '-',
					name: name.trim() !== '' ? name : '-',
					uuid: headerUUID,
					version: [0, 0, 1],
					min_engine_version: [1, 19, 0]
				},

				modules: [
					{
						description: '',
						type: 'script',
						language: 'javascript',
						uuid: moduleUUID,
						version: [0, 0, 1],
						entry: 'scripts/index.js'
					}
				],

				dependencies: [
					{
						uuid: "b26a4d4c-afdf-4690-88f8-931846312678",
						version: "1.0.0-beta"
					},
					{
						uuid: "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
						version: "1.0.0-beta"
					},
					{
						uuid: "2BD50A27-AB5F-4F40-A596-3641627C635E",
						version: "1.0.0-beta"
					}
				],

				metadata: {
					authors: [
						auth.trim() !== '' ? auth : '-'
					]
				}

			}, null, 2)
			return
		}

		case V['1.16.210+']: {
			print('Not temporarily supported.')
			//break
			return
		}
	}

	return createFile('manifest.json', manifest)

}

export { createManifest }