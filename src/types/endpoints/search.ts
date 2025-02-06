import type { MaterialType } from '../constants'
import type { DataEntity } from '../entities'
import type { MediaFilter } from '../mediaFilter'
import type { ID, StrictlyAll } from '../shared'
import type { TranslationType } from './translations'

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
	translationId: ID[]
	translationType: TranslationType
	hasField: keyof SearchArguments
	prioritizeTranslations: ID[]
	unprioritizeTranslations: ID[]
	prioritizeTranslation: TranslationType
	blockTranslations: ID[]
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
