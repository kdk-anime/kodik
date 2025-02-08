import type { ApiResponse } from '../src'

export const mockResponse: ApiResponse<object> = {
	time: '0ms',
	total: 0,
	prevPage: null,
	nextPage: null,
	results: []
}

export const mockResponseWithPagination: ApiResponse<object> = {
	time: '0ms',
	total: 0,
	prevPage: 'https://test',
	nextPage: 'https://test',
	results: []
}

export const fetchFunction = async (): Promise<ApiResponse<object>> => mockResponse

export const fetchFunctionWithPagination = async (): Promise<ApiResponse<object>> => mockResponseWithPagination
