export function parseStvLine({parsed}, l) {
	if (l.nameS) {
		parsed.name = l.nameS
	}
	return parsed;
}
