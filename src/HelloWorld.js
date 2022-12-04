const helloWorld = `import * as mc from "@minecraft/server"
let time = 0
let timer = mc.world.events.tick.subscribe(_ => {
	if (++time === 300) {
		mc.world
		  .getDimension("overworld")
		  .runCommand("say Hello, world!")
	}
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