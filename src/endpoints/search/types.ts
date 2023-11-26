interface SearchArgumentsBase extends MediaFilter {
	title: string
	titleOrig: string
	strict: boolean
	fullMatch: boolean
	id: ID
	playerLink: string
	kinopoiskId: ID
	imdbId: ID
	mdlId: ID
	worldartAnimationId: ID
	worldartCinemaId: ID
	worldartLink: string
	shikimoriId: ID
	limit: number
	types: MaterialType
	year: number
	translationId: Array<TranslationSharedEntity['id']>
	translationType: TranslationType
	hasField: keyof SearchArguments
	prioritizeTranslations: Array<ID | TranslationSharedEntity['id']>
	unprioritizeTranslations: Array<ID | TranslationSharedEntity['id']>
	prioritizeTranslation: TranslationType
	blockTranslations: Array<TranslationSharedEntity['id']>
	camrip: boolean
	lgbt: boolean
	withSeasons: boolean
	season: number
	withEpisodes: boolean
	withEpisodesData: boolean
	episode: number
	withPageLinks: boolean
	notBlockedIn: string[]
	notBlockedForMe: boolean
	withMaterialData: boolean
}

type StrictSearchKeys = 'hasField'

export type SearchArguments = SearchArgumentsBase & StrictlyAll<SearchArgumentsBase, StrictSearchKeys>

export type SearchEntity = DataEntity
