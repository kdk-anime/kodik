import type { DictionarySortType, GenreType, MaterialType } from '../constants'
import type { MediaFilter } from '../mediaFilter'
import type { ID } from '../shared'
import type { TranslationType } from './translations'

export interface QualitiesArguments extends MediaFilter {
	genresType: GenreType
	types: MaterialType[]
	year: number
	translationId: ID[]
	blockTranslations: ID[]
	translationType: TranslationType
	hasField: keyof QualitiesArguments
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

export interface QualityEntity {
	title: string
	count: number
}
