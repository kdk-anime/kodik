import type { TranslationType } from '../translations/types'

export interface YearsArguments extends MediaFilter {
	types: MaterialType[]
	translationId: Array<TranslationSharedEntity['id']>
	blockTranslations: Array<TranslationSharedEntity['id']>
	translationType: TranslationType
	hasField: keyof YearsArguments
	lgbt: boolean
	sort: DictionarySortType | 'year'
}

export interface YearEntity {
	year: number
	count: number
}
