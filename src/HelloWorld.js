const helloWorld = [
	"import { world, system } from '@minecraft/server'",
	"let tickIndex = 0",
	"const print = (...contents) => {",
	"  return world.getDimension('overworld')",
	"    .runCommandAsync('say ' + contents.join(' '))",
	"}",
	"",
	"system.run(function mainTick() {",
	"  try {",
	"    tickIndex ++",
	"    if (tickIndex === 100) {",
	"      print('Hello, world!')",
	"    }",
	"  } catch (error) {",
	"    print('§cError: ' + error)",
	"  }",
	"",
	"  system.run(mainTick)",
	"})"
].join('\n')

export { helloWorld }