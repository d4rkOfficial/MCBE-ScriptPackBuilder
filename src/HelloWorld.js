const helloWorld = [
	"import { world, system } from '@minecraft/server'",
	"",
	"system.run(function mainTick(tickIndex = 0) {",
	"    tickIndex ++",
	"    if (tickIndex === 100) {",
	"        world.say(' Hello, world! ')",
	"    } else {",
	"        system.run(() => mainTick(tickIndex))",
	"    }",
	"})"
].join('\n')

export { helloWorld }