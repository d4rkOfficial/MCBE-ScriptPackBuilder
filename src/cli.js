const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

function print(content) {
	return console.log(content)
	//return process.stdout.write(content)
}

async function ask(question) {
	question = `\x1B[36m${question} \x1B[37m`
	return await new Promise((resolve) => {
		readline.question(question, (answer) => {
			resolve(answer)
		})
	})
}

async function choose(intro, options, {DEFAULT}) {
	print(`\x1B[36m${intro}`)
	options.forEach(opt => print(`\x1B[37m${opt}`))
	const answer = await ask('Your choice: ')
	if (answer.trim() === '') {
		return DEFAULT
	}
	return Number(answer)
}

async function askYesNo(question) {
	const answer = (await ask(question)).trim()
	if (['N', 'n', 'No', 'no', 'NO'].includes(answer)) {
		return false
	}
	return true
}

export { print, ask, choose, askYesNo }