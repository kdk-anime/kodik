import type { YearEntity, YearsArguments } from './years'
import type { GenreEntity, GenresArguments } from './genres'
import type { CountriesArguments, CountryEntity } from './countries'
import type { QualitiesArguments, QualityEntity } from './qualities'
import type { TranslationArguments, TranslationEntity } from './translations'
import type { ListArguments, ListEntity } from './list'
import type { SearchArguments, SearchEntity } from './search'

export type * from './countries'
export type * from './genres'
export type * from './list'
export type * from './qualities'
export type * from './search'
export type * from './translations'
export type * from './years'

export interface EndpointsTypeMap {
	years: [YearsArguments, YearEntity]
	genres: [GenresArguments, GenreEntity]
	countries: [CountriesArguments, CountryEntity]
	qualities: [QualitiesArguments, QualityEntity]
	translations: [TranslationArguments, TranslationEntity]
	list: [ListArguments, ListEntity]
	search: [SearchArguments, SearchEntity]
}
