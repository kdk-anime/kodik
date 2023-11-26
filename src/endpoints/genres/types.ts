export interface GenresArguments extends MediaFilter {
	genresType: GenreType
	types: MaterialType[]
	year: number
	translationId: Array<TranslationSharedEntity['id']>
	blockTranslations: Array<TranslationSharedEntity['id']>
	translationType: TranslationType
	hasField: keyof GenresArguments
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

export interface GenreEntity {
	title: string
	count: number
}
