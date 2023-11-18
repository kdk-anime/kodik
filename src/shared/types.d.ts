type ID = number | string
type StrictlyAll<TObj extends object, TKeys extends keyof TObj> = {
	[TKey in TKeys & string as `${TKey}_and`]: TObj[TKey]
} & TObj

type NumberWithRange = `${number}` | `${number}-${number}`
