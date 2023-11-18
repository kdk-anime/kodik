interface YearsArguments extends MediaFilter {
	types: MaterialType[]
	translationId: Array<TranslationEntity['id']>
	blockTranslations: Array<TranslationEntity['id']>
	translationType: TranslationType
	hasField: keyof YearsArguments
	lgbt: boolean
	sort: DictionarySortType | 'year'
}

interface YearEntity {
	year: number
	count: number
}
