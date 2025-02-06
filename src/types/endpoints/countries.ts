import type { DictionarySortType, GenreType, MaterialType } from '../constants'
import type { MediaFilter } from '../mediaFilter'
import type { GenresArguments } from './genres'
import type { TranslationType } from './translations'
import { type ID } from '../shared'

export interface CountriesArguments extends MediaFilter {
	genresType: GenreType
	types: MaterialType[]
	year: number
	translationId: ID[]
	blockTranslations: ID[]
	translationType: TranslationType
	hasField: keyof GenresArguments
	lgbt: boolean
	sort: DictionarySortType | 'title'
}

export interface CountryEntity {
	title: string
	count: number
}
