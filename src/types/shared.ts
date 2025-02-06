export type ID = number | string
export type StrictlyAll<TObj extends object, TKeys extends keyof TObj> = {
	[TKey in TKeys & string as `${TKey}And`]: TObj[TKey]
} & TObj

export type NumberWithRange = `${number}` | `${number}-${number}`
export type Datestamp = `${number}-${number}-${number}`
export type Timestamp = `${Datestamp}T${number}:${number}:${number}Z`
export type FetchFunction = (url: string) => PromiseLike<object>
