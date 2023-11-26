import type {
	CountriesArguments,
	CountryEntity,
	GenreEntity,
	GenresArguments, ListArguments, ListEntity,
	QualitiesArguments, QualityEntity, SearchArguments, SearchEntity, TranslationArguments, TranslationEntity,
	YearEntity,
	YearsArguments
} from './endpoints'

export const endpointsConfig = {
	years: '/years',
	genres: '/genres',
	countries: '/countries',
	qualities: '/qualities/v2',
	translations: '/translations/v2',
	list: '/list',
	search: '/search'
}

export interface EndpointsType {
	years: [YearsArguments, YearEntity]
	genres: [GenresArguments, GenreEntity]
	countries: [CountriesArguments, CountryEntity]
	qualities: [QualitiesArguments, QualityEntity]
	translations: [TranslationArguments, TranslationEntity]
	list: [ListArguments, ListEntity]
	search: [SearchArguments, SearchEntity]
}
