import type { TranslationEntity } from '../../endpoints'
import { type MaterialEntity } from './materialEntity'

export interface DataEntity {
	id: ID
	title: string
	titleOrig: string
	otherTitle: string
	link: string
	year: number
	kinopoiskId: ID
	imdbId: ID
	mdlId: ID
	worldartLink: string
	shikimoriId: ID
	type: MaterialType
	quality: string
	camrip: boolean
	lgbt: boolean
	translation: TranslationEntity
	createdAt: Timestamp
	updatedAt: Timestamp
	blockedCountries: string[]
	seasons?: {
		[x in `${number}`]: {
			link: string
			episodes: string[]
		}
	}
	lastSeason: number
	lastEpisode: number
	episodesCount: number
	blockedSeasons: Array<`${number}`> | 'all'
	screenshots: string[]
	materialData?: MaterialEntity
}
