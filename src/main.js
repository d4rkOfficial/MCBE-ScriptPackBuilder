import { manifestTemplates } from './ManifestTemplates.js'
import { print, prompt } from './IO-stream.js'
import { writeFile, readFile, mkdir } from './FileSystem.js'
import { logo } from './Logo.js'
import { testVersion } from './VersionTester.js'
import { helloWorld } from './HelloWorld.js'

(async function main() {
	print(logo)
	const defaultVersion = '1.19.60.22'
	let gameVersion = (
	  await prompt(
	  	`Minecraft Version(default ${defaultVersion}): `
	  )
	) ?? defaultVersion
	let manifestVersion = testVersion(gameVersion)
	if (!manifestVersion) {
		print("This version is not supported.")
		return
	}
	let { generate } = manifestTemplates[manifestVersion]
	let manifestJSON = await generate()
	await writeFile('manifest.json', manifestJSON)
	await mkdir("scripts")
	await writeFile('scripts/index.js', helloWorld)
	print('done.')
	process.exit(0)
})()