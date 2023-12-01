export function deepNestingKeyConversion (obj: object | null, func: (str: string) => string): object | null {
	if (obj == null) {
		return null
	}

	const entries = Object.entries(obj)

	return Object.fromEntries(entries.map(([key, value]) => {
		let castedValue = value

		if (typeof castedValue === 'object') {
			if (Array.isArray(castedValue)) {
				castedValue = castedValue.map((item) => deepNestingKeyConversion(item, func))
			} else {
				castedValue = deepNestingKeyConversion(castedValue, func)
			}
		}

		return [func(key), castedValue]
	}))
}
