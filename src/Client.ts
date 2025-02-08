import { KodikEndpointClient } from './EndpointClient'
import { type endpoints } from './config'
import { type EndpointsTypeMap } from './types'

type FetchFunction = (url: string) => PromiseLike<object>

export class KodikClient {
	constructor (
		private readonly token: string,
		private readonly fetch: FetchFunction
	) {}

	createEndpoint <
		T extends keyof typeof endpoints,
		TArgs extends Partial<EndpointsTypeMap[T][0]>,
		TEntity extends EndpointsTypeMap[T][1],
	>(name: T): KodikEndpointClient<T, TArgs, TEntity> {
		return new KodikEndpointClient(name, this.token, this.fetch)
	}
}
