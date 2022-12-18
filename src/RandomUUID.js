function randomUUID() {
	const random = () => Math.random().toString(16).slice(-4)
	let uuid = ''
	uuid += random()
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += '-'
	uuid += random()
	uuid += random()
	uuid += random()
	return uuid
}

export { randomUUID }