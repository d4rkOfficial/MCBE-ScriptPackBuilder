import { print, prompt } from './IO.js'
import { writeFile, readFile, mkdir } from './File.js'
import { logo } from './Logo.js'
import { helloWorld } from './HelloWorld.js'
import { createManifest } from './Manifest.js'

(async function main() {
	print(logo)
	const manifestJSON = await createManifest()
	await writeFile('manifest.json', manifestJSON)
	await mkdir("scripts")
	await writeFile('scripts/index.js', helloWorld)
	print('Done!')
	process.exit(0)
})()