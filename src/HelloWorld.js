const helloWorld = `import { world, system } from "@minecraft/server"
let tickIndex = 0

const print = (...contents) => {
  return world.getDimension('overworld')
	.runCommandAsync('say ' + contents.join(' '))
}

system.run(function mainTick() {
	try {
		tickIndex ++
		if (tickIndex === 100) {
			print('Hello, world!')
		}
	} catch (error) {
		print('Error: ' + error)
	}
	system.run(mainTick)
})`

/*
const helloWorld = `import * as mc from "mojang-minecraft"
let time = 0
let timer = mc.world.events.tick.subscribe(_ => {
	if (++time === 100) {
		mc.world
		  .getDimension("overworld")
		  .runCommand("say Hello, world!")
	}
})
`
*/

export { helloWorld }