import { manifestTemplates } from './ManifestTemplates.js'

function testVersion(version) {
	version = version
		.split('.')
		.map((str) => Number(str))
	version.length === 3 && version.push(0)
	version.length === 2 && version.push(0, 0)
	version.length === 1 && version.push(0, 0, 0)
	let manifestVers =
		Object.keys(manifestTemplates).sort((v1, v2) => {
			[v1, v2] = [v2, v1]
			v1 = v1.split('.')
			v2 = v2.split('.')
			return compareVersion(v1, v2)
		})
	let manifestVer
	for (let ver of manifestVers) {
		ver = ver
		  .split('.')
			.map((str) => Number(str))
		if (compareVersion(version, ver) < 0) {
			break
		} else {
			manifestVer = ver
		}
	}
	if (!manifestVer) manifestVer = manifestVers[0]
	return manifestVer
}

function compareVersion(v1, v2) {
	return (
		(v1[0] - v2[0]) * 1000000 +
		(v1[1] - v2[1]) * 10000 +
		(v1[2] - v2[2]) * 100 +
		(v1[3] - v2[3])
	) > 0 ? 1 : -1
}

export { testVersion }