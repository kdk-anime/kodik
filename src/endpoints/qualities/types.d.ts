interface QualitiesArguments extends MediaFilter {
	genresType: GenreType
	types: MaterialType[]
	year: number
	translationId: Array<TranslationEntity['id']>
	blockTranslations: Array<TranslationEntity['id']>
	translationType: TranslationType
	hasField: keyof GenresArguments
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

interface QualityEntity {
	title: string
	count: number
}
