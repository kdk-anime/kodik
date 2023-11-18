type TranslationType = 'voice' | 'subtitles'

interface TranslationArgumentsBase extends MediaFilter {
	types: MaterialType
	year: number
	translationType: TranslationType
	hasField: keyof TranslationArguments[]
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

type TranslationStrictFilter = 'hasField'

type TranslationArguments = TranslationArgumentsBase & StrictlyAll<TranslationArgumentsBase, TranslationStrictFilter>

interface TranslationEntity {
	id: ID
	title: string
	count: number
}
