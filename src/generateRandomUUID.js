function generateRandomUUID() {
	const random = () => Math
		.random()
		.toString(16)
		.slice(-1)
	let uuid = ''
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	uuid += random()
	return uuid
}

export { generateRandomUUID }