export const camelCaseToSnakeCase = (str: string): string => {
	return str.replaceAll(/_([a-z])/g, (_, $1) => $1.toUpperCase())
}

export const snakeCaseToCamelCase = (str: string): string => {
	return str.replaceAll(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
}
