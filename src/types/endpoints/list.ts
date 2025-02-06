import type { MaterialType, OrderType, SortType } from '../constants'
import type { DataEntity } from '../entities'
import type { MediaFilter } from '../mediaFilter'
import type { ID, StrictlyAll } from '../shared'
import type { TranslationType } from './translations'

interface ListArgumentsBase extends MediaFilter {
	limit: number
	sort: SortType
	order: OrderType
	types: MaterialType
	years: number[]
	translationId: ID[]
	blockTranslations: ID[]
	translationType: TranslationType
	hasField: keyof ListArguments[]
	camRip: boolean
	lgbt: boolean
	withSeasons: boolean
	withEpisodes: boolean
	withEpisodesData: boolean
	withPageLinks: boolean
	notBlockedIn: string[]
	notBlockedForMe: boolean
	withMaterialData: boolean
}

type StrictListKeys = 'hasField'

export type ListArguments = ListArgumentsBase & StrictlyAll<ListArgumentsBase, StrictListKeys>

export type ListEntity = DataEntity
