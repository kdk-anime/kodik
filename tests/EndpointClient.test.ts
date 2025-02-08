import { KodikEndpointClient } from '../src'
import { fetchFunction, fetchFunctionWithPagination, mockResponse, mockResponseWithPagination } from './utils'

describe('Endpoint Client tests', () => {
	test('Initialize class instance', () => {
		const endpointClient = new KodikEndpointClient('search', 'token', fetchFunction)

		expect(endpointClient).toBeInstanceOf(KodikEndpointClient)
		expect(endpointClient.endpointName).toBe('search')
	})

	test('Set arguments', () => {
		const expectedArguments = {
			shikimoriId: 0,
			strict: false,
			worldartLink: '',
			actors: []
		}

		const endpointClient = new KodikEndpointClient('search', 'token', fetchFunction)
		endpointClient.set(expectedArguments)

		const returnedArguments = endpointClient.arguments
		expect(returnedArguments).toStrictEqual(expectedArguments)
	})

	test('Add arguments', () => {
		const aArguments = {
			shikimoriId: 0,
			strict: false,
			worldartLink: '',
			actors: []
		}
		const bArguments = {
			shikimoriId: 3,
			withSeasons: true,
			designers: []
		}
		const expectedArguments = { ...aArguments, ...bArguments }

		const endpointClient = new KodikEndpointClient('search', 'token', fetchFunction)
		endpointClient.set(aArguments)
		endpointClient.add(bArguments)

		const returnedArguments = endpointClient.arguments
		expect(returnedArguments).toStrictEqual(expectedArguments)
	})

	test('Fetch data', async () => {
		const endpointClient = new KodikEndpointClient('search', 'token', fetchFunction)
		const prevEndpointClient = new KodikEndpointClient('search', 'token', fetchFunctionWithPagination)

		await expect(endpointClient.fetch()).resolves.toStrictEqual(mockResponse.results)
		await expect(endpointClient.next()).resolves.toStrictEqual(mockResponse.results)
		await expect(endpointClient.prev()).rejects.toBeInstanceOf(ReferenceError)
		await expect(prevEndpointClient.next()).resolves.toStrictEqual(mockResponseWithPagination.results)
		await expect(prevEndpointClient.prev()).resolves.toStrictEqual(mockResponseWithPagination.results)
	})
})
