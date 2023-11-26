interface ListArgumentsBase extends MediaFilter {
	limit: number
	sort: SortType
	order: OrderType
	types: MaterialType
	years: number[]
	translationId: Array<TranslationSharedEntity['id']>
	blockTranslations: Array<TranslationSharedEntity['id']>
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
