import { type EndpointsTypeMap } from './types'

export const endpointOrigin = 'https://kodikapi.com'

export const endpoints = {
	years: '/years',
	genres: '/genres',
	countries: '/countries',
	qualities: '/qualities/v2',
	translations: '/translations/v2',
	list: '/list',
	search: '/search'
} satisfies Record<keyof EndpointsTypeMap, string>
