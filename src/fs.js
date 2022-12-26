const { mkdir, writeFile, readdir } = require('fs/promises')

async function testEmptyFolder(folder = '.') {
	const { length : filesInFolder } = await readdir(folder)
	if (filesInFolder === 0) {
		return false //No file in this folder, returns false, asserting it an empty folder
	}
	return true //files are there in the folder, returns true, asserting it a not-empty folder
}

async function createFolder(folder) {
	return mkdir(folder)
}

async function createFile(file, contents) {
	return writeFile(file, contents)
}

export { testEmptyFolder, createFolder, createFile }