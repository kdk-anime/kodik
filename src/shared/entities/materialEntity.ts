interface CinemaStaff {
	actors: string[]
	directors: string[]
	producers: string[]
	writers: string[]
	composers: string[]
	editors: string[]
	designers: string[]
	operators: string[]
}

export interface KinopoiskMaterialEntity extends CinemaStaff {
	title: string
	titleEn: string
	year: number
	tagline: string
	description: string
	posterUrl: string
	duration: string
	countries: string[]
	allGenres: string[]
	genres: string[]
	kinopoiskRating: number
	kinopoiskVotes: number
	imdbRating: number
	imdbVotes: number
	premiereRu: Datestamp
	premiereWorld: Datestamp
	ratingMpaa: RatingMPAA
	minimalAge: number
}

export interface ShikimoriMaterialEntity {
	title: string
	animeTitle: string
	titleEn: string
	otherTitles: string[]
	otherTitlesEn: string[]
	otherTitlesJp: string[]
	animeLicenseName: string
	animeLicensedBy: string
	animeKind: AnimeKind
	allStatus: ReleaseStatus | 'latest'
	animeStatus: ReleaseStatus | 'latest'
	description: string
	animeDescription: string
	posterUrl: string
	screenshots: string[]
	duration: number
	allGenres: string[]
	animeGenres: string[]
	animeStudios: string[]
	shikimoriRating: string[]
	shikimoriVotes: string[]
	airedAt: Datestamp
	releasedAt: Datestamp
	nextEpisodeAt: Timestamp
	ratingMpaa: RatingMPAA
	episodesTotal: number
	episodesAired: number
}

export interface MyDramaListMaterialEntity extends CinemaStaff {
	titleEn: string
	otherTitles: string[]
	mydramalistTags: string[]
	allStatus: ReleaseStatus
	dramaStatus: ReleaseStatus
	posterUrl: string
	duration: number
	countries: string[]
	allGenres: string[]
	dramaGenres: string[]
	mydramalistRating: number
	mydramalistVotes: number
	airedAt: Datestamp
	releasedAt: Datestamp
	nextEpisodeAt: Timestamp
	minimalAge: number
	episodesTotal: number
	episodesAired: number
}

export type MaterialEntity = KinopoiskMaterialEntity & ShikimoriMaterialEntity & MyDramaListMaterialEntity
