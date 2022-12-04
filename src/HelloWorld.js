const helloWorld = `import { world, system } from "@minecraft/server"
let tickIndex = 0

system.run(function mainTick() {
	try {
		tickIndex ++
		if (tickIndex === 300) {
			world.getDimension('overworld')
			  .runCommandAsync('Hello, world!')
		}
	} catch (error) {
		console.warn('Error: ' + error)
	}
	system.run(mainTick)
})


`

/*
const helloWorld = `import * as mc from "mojang-minecraft"
let time = 0
let timer = mc.world.events.tick.subscribe(_ => {
	if (++time === 300) {
		mc.world
		  .getDimension("overworld")
		  .runCommand("say Hello, world!")
	}
})
`
*/

export { helloWorld }