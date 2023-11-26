export interface QualitiesArguments extends MediaFilter {
	genresType: GenreType
	types: MaterialType[]
	year: number
	translationId: Array<TranslationSharedEntity['id']>
	blockTranslations: Array<TranslationSharedEntity['id']>
	translationType: TranslationType
	hasField: keyof QualitiesArguments
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

export interface QualityEntity {
	title: string
	count: number
}
