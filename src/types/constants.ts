export type RatingMPAABase = 'g' | 'pg' | 'pg-13' | 'r' | 'r+' | 'rx'
export type RatingMPAA = RatingMPAABase | Capitalize<RatingMPAABase>

export type AnimeKind = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48'

export type ReleaseStatus = 'anons' | 'ongoing' | 'released'

export type MaterialType = 'foreign-movie' | 'soviet-cartoon' | 'foreign-cartoon' | 'russian-cartoon' | 'anime'
| 'russian-movie' | 'cartoon-serial' | 'documentary-serial' | 'russian-serial' | 'foreign-serial' | 'anime-serial'
| 'multi-part-film'

export type SortType = 'year' | 'created_at' | 'updated_at' | 'kinopoisk_rating' | 'imdb_rating' | 'shikimori_rating'
export type DictionarySortType = 'count'
export type OrderType = 'asc' | 'desc'

export type GenreType = 'kinopoisk' | 'shikimori' | 'mydramalist' | 'all'
