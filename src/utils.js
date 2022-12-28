import { print } from './cli.js'

const child_process = require('child_process')

async function runCommand(cmd) {
	return await new Promise((resolve, reject) => {
		const sub_process = child_process.exec(cmd, (error, stdout) => {
			if (error) reject(error)
			else resolve(stdout)
			sub_process.kill()
		})
	})
}

async function downloadIcon() {
	return runCommand('curl https://d4rkofficial.github.io/MCBE-ScriptPackBuilder/icon -o pack_icon.png')
}

function randomUUID() {
	const random4 = () => {
		return Math.random().toString(16).slice(-4)
	}
	let uuid = ''
	uuid += random4()
	uuid += random4()
	uuid += '-'
	uuid += random4()
	uuid += '-'
	uuid += random4()
	uuid += '-'
	uuid += random4()
	uuid += '-'
	uuid += random4()
	uuid += random4()
	uuid += random4()
	return uuid //12345678-1234-1234-12345678abcd
}

function printLogo() {
	const logo = [
	"",
	"  __  __  _____ ____  ______    ",
	" |  \\/  |/ ____|  _ \\|  ____| ",
	" | \\  / | |    | |_) | |__     ",
	" | |\\/| | |    |  _ <|  __|    ",
	" | |  | | |____| |_) | |____    ",
	" |_|  |_|\\_____|____/|______|  ",
	"  __   __   __     __  ___  __        __           ",
	" /__\` /  \` |__) | |__)  |  |__)  /\\  /  \` |__/ ",
	" .__/ \\__, |  \\ | |     |  |    /~~\\ \\__, |  \\",
	"  __               __   ___  __              ",
	" |__) |  | | |    |  \\ |__  |__)            ",
	" |__) \\__/ | |___ |__/ |___ |  \\           ",
	"",
  ].join('\n\x1B[34m ')
  print(logo)
}

export { runCommand, downloadIcon, randomUUID, printLogo }