import { EndpointClass } from './endpointClass'
import { type endpointsConfig, type EndpointsType } from './endpointsConfig'

type FetchFunction = (url: string) => PromiseLike<object>

export class KodikClient {
	private readonly token: string

	private readonly fetch: FetchFunction

	constructor (token: string, fetch: FetchFunction) {
		this.token = token
		this.fetch = fetch
	}

	createEndpoint <
		T extends keyof typeof endpointsConfig,
		TArgs extends Partial<EndpointsType[T][0]>,
		TEntity extends EndpointsType[T][1],
	>(name: keyof typeof endpointsConfig): EndpointClass<T, TArgs, TEntity> {
		return new EndpointClass(name, this.token, this.fetch)
	}
}
