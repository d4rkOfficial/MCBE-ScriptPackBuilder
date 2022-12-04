const Readline = require('readline');

const readline = Readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function print(content) {
	console.log(content)
}

async function prompt(question) {
	console.log(question)
	return await new Promise((resolve) => {
		readline.on('line', (data) => {
			resolve(data)
		})
	})
}

export { print, prompt }