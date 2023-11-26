type ID = number | string
type StrictlyAll<TObj extends object, TKeys extends keyof TObj> = {
	[TKey in TKeys & string as `${TKey}And`]: TObj[TKey]
} & TObj

type NumberWithRange = `${number}` | `${number}-${number}`
type Datestamp = `${number}-${number}-${number}`
type Timestamp = `${Datestamp}T${number}:${number}:${number}Z`
type FetchFunction = (url: string) => PromiseLike<object>
