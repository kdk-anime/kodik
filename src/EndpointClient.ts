import { camelCaseToSnakeCase, snakeCaseToCamelCase } from './libs/namingConversion'
import { deepNestingKeyConversion } from './libs/object'
import { endpoints, endpointOrigin } from './config'
import type { FetchFunction, EndpointsTypeMap, ApiResponse } from './types'

export class KodikEndpointClient<T extends keyof typeof endpoints, TArgs extends Partial<EndpointsTypeMap[T][0]>, TEntity extends EndpointsTypeMap[T][1]> {
	private readonly endpointAddress: string

	private internalArguments: TArgs = Object()

	private pagination: Record<'prevPage' | 'nextPage', string | null> = { prevPage: null, nextPage: null }

	constructor (
		readonly endpointName: T,
		private readonly token: string,
		private readonly fetchFunction: FetchFunction
	) {
		this.endpointAddress = new URL(endpoints[endpointName], endpointOrigin).href
	}

	/**
	 * Sets a new arguments for next request
	 */
	set (obj: TArgs): this {
		this.internalArguments = obj
		return this
	}

	/**
	 * Adds a new arguments to the current one
	 */
	add (obj: TArgs): this {
		Object.assign(this.internalArguments, obj)
		return this
	}

	/**
	 * Returns deep copy of arguments
	 */
	get arguments (): TArgs {
		return JSON.parse(JSON.stringify(this.internalArguments))
	}

	/**
	 * Fetches data from an endpoint. Url and arguments may be overwritten by passing them
	 */
	async fetch (uri?: string, obj?: TArgs): Promise<TEntity[]> {
		const url = new URL(uri ?? this.endpointAddress)

		Object.entries(obj ?? this.internalArguments)
			.concat(['token', this.token])
			.forEach(([key, value]) => {
				const preparedKey = camelCaseToSnakeCase(key)
				const preparedValue = Array.isArray(value) ? value.join(',') : value.toString()
				url.searchParams.append(preparedKey, preparedValue)
			})

		const rawData = await this.fetchFunction(url.href)
		const data = deepNestingKeyConversion(rawData, snakeCaseToCamelCase) as ApiResponse<TEntity>

		this.pagination = {
			prevPage: data.prevPage,
			nextPage: data.nextPage
		}

		return data.results
	}

	/**
	 * Fetches next page or first
	 */
	async next (): Promise<TEntity[]> {
		return await this.fetch(this.pagination.nextPage ?? undefined)
	}

	/**
	 * Fetches previous page
	 */
	async prev (): Promise<TEntity[] | null> {
		if (this.pagination.prevPage == null) {
			throw new ReferenceError('No more pages')
		}

		return await this.fetch(this.pagination.prevPage)
	}
}
