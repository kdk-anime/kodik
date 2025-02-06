import type { DictionarySortType, MaterialType } from '../constants'
import type { MediaFilter } from '../mediaFilter'
import type { ID, StrictlyAll } from '../shared'

export type TranslationType = 'voice' | 'subtitles'

interface TranslationArgumentsBase extends MediaFilter {
	types: MaterialType
	year: number
	translationType: TranslationType
	hasField: keyof TranslationArguments[]
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

type TranslationStrictFilter = 'hasField'

export type TranslationArguments = TranslationArgumentsBase & StrictlyAll<TranslationArgumentsBase, TranslationStrictFilter>

export interface TranslationEntity {
	id: ID
	title: string
	count: number
}
