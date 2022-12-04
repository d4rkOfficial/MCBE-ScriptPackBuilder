const Fs = require('fs')
const Path = require('path')

async function writeFile(name, contents) {
	const fullName = Path.resolve(__dirname, name)
	return await new Promise((resolve, reject) => {
		Fs.writeFile(
			fullName, contents, { flag: 'a' },
			(err) => {
				if (err) {
					reject(err)
					return
				}
				resolve()
			}
		)
	})
}

async function readFile(name) {
	const fullName = Path.resolve(__dirname, name)
	return await new Promise((resolve, reject) => {
		Fs.readFile(fileFullName, (err, data) => {
			if (err) {
				reject(err)
				return
			}
			resolve(String(data))
		})
	})
}

async function mkdir(name) {
	const fullName = Path.resolve(__dirname, name)
	return await new Promise((resolve, reject) => {
		Fs.mkdir(
			fullName,
			(err) => {
				if (err) {
					reject(err)
					return
				}
				resolve()
			}
		)
	})
}

export { writeFile, readFile, mkdir }