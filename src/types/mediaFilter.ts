import type { AnimeKind, RatingMPAA, ReleaseStatus } from './constants'
import type { NumberWithRange, StrictlyAll } from './shared'

interface MediaFilterBase {
	countries: string[]
	genres: string[]
	animeGenres: string[]
	dramaGenres: string[]
	allGenres: string[]
	duration: NumberWithRange
	kinopoiskRating: NumberWithRange
	imdbRating: NumberWithRange
	shikimoriRating: NumberWithRange
	mydramalistRating: NumberWithRange
	actors: string[]
	directors: string[]
	producers: string[]
	writers: string[]
	composers: string[]
	editors: string[]
	designers: string[]
	operators: string[]
	ratingMpaa: RatingMPAA[]
	minimalAge: NumberWithRange
	animeKind: AnimeKind[]
	myDramaListTags: string[]
	animeStatus: ReleaseStatus[]
	dramaStatus: ReleaseStatus[]
	allStatus: ReleaseStatus[]
	animeStudios: string[]
	animeLicensedBy: string[]
}

type MediaStrictFilterKeys = 'countries' | 'genres' | 'directors' | 'producers' | 'writers' | 'composers' | 'editors'
| 'designers' | 'operators' | 'myDramaListTags' | 'animeStudios' | 'animeLicensedBy'

export type MediaFilter = MediaFilterBase & StrictlyAll<MediaFilterBase, MediaStrictFilterKeys>
