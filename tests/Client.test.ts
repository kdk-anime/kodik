import { KodikClient, KodikEndpointClient } from '../src'
import { fetchFunction } from './utils'

describe('Client tests', () => {
	test('Initialize class instance', () => {
		const client = new KodikClient('token', fetchFunction)

		expect(client).toBeInstanceOf(KodikClient)
	})

	test('Create endpoint', () => {
		const client = new KodikClient('token', fetchFunction)
		const searchEndpoint = client.createEndpoint('search')

		expect(searchEndpoint).toBeInstanceOf(KodikEndpointClient)
		expect(searchEndpoint.endpointName).toBe('search')
	})
})
