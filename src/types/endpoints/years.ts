import type { ID } from '../shared'
import type { DictionarySortType, MaterialType } from '../constants'
import type { MediaFilter } from '../mediaFilter'
import type { TranslationType } from './translations'

export interface YearsArguments extends MediaFilter {
	types: MaterialType[]
	translationId: ID[]
	blockTranslations: ID[]
	translationType: TranslationType
	hasField: keyof YearsArguments
	lgbt: boolean
	sort: DictionarySortType | 'year'
}

export interface YearEntity {
	year: number
	count: number
}
