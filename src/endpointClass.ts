import { endpointsConfig, type EndpointsType } from './endpointsConfig'
import { kodikEndpoint } from './config'

export class EndpointClass<T extends keyof typeof endpointsConfig, TArgs extends Partial<EndpointsType[T][0]>, TEntity extends EndpointsType[T][1]> {
	private readonly endpointName: string

	private readonly endpointAddress: string

	private readonly token: string

	private readonly fetch: FetchFunction

	private arguments: TArgs | object = {}

	private pagination: Record<'prevPage' | 'nextPage', string | null> = { prevPage: null, nextPage: null }

	constructor (name: T, token: string, fetch: FetchFunction) {
		this.endpointName = name
		this.endpointAddress = endpointsConfig[name]
		this.token = token
		this.fetch = fetch
	}

	set (obj: TArgs): this {
		this.arguments = obj
		return this
	}

	add (obj: TArgs): this {
		Object.assign(this.arguments, obj)
		return this
	}

	async next (): Promise<TEntity[]> {
		let url = kodikEndpoint + this.endpointAddress
		if (this.pagination.nextPage != null) {
			url = this.pagination.nextPage
		} else {
			const record = Object.entries(this.arguments).map(([key, value]) => [
				key,
				Array.isArray(value) ? value.join(',') : value.toString()
			])
			const args = new URLSearchParams(record)
			url += `?${args.toString()}`
		}
		const data = await this.fetch(url) as ApiResponse<TEntity>

		this.pagination = {
			prevPage: data.prevPage,
			nextPage: data.nextPage
		}

		return data.results
	}

	async prev (): Promise<TEntity[] | null> {
		if (this.pagination.prevPage == null) {
			return null
		}

		const data = await this.fetch(this.pagination.prevPage) as ApiResponse<TEntity>

		this.pagination = {
			prevPage: data.prevPage,
			nextPage: data.nextPage
		}

		return data.results
	}
}
