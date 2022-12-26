import { createFile } from './fs.js'

const V = { //Namespace(enum) V refering to mcbe script engine versions
	"1.19.60.22+": 1,
	"1.19.30.25": 2,
	"1.16.210+": 3
}

async function createHelloWorldJS(mcbe_vers, headerUUID, moduleUUID) {
	let code
	switch (mcbe_vers) {
		case V['1.19.60.22+']: {
			code = [
				"import { world, system } from '@minecraft/server'",
				"",
				"system.run(function mainTick(tickIndex = 0) {",
				"    tickIndex++",
				"    if (tickIndex === 100) {",
				"        world.say(' Hello, world! ')",
				"    } else {",
				"        system.run(() => mainTick(tickIndex))",
				"    }",
				"})"
			].join('\n')
			break
		}

		case V['1.19.30.25']: {
			code = [
				"import { world } from 'mojang-minecraft'",
				"",
				"let tickIndex = 0",
				"world.events.tick.subscribe(() => {",
				"    tickIndex++",
				"    if (tickIndex === 100) {",
				"        world.getDimension('overworld').runCommand('say Hello, world! ')",
				"    }",
				"})"
			].join('\n')
			return
		}

		case V['1.16.210+']: {
			print('Not temporarily supported.')
			//break
			return
		}
	}

	return createFile('scripts/index.js', code)

}

export { createHelloWorldJS }