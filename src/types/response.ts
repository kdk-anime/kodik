export interface ApiResponse<T extends object> {
	time: `${number}ms`
	total: number
	prevPage: string | null
	nextPage: string | null
	results: T[]
}
