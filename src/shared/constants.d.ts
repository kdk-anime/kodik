type RatingMPAABase = 'g' | 'pg' | 'pg-13' | 'r' | 'r+' | 'rx'
type RatingMPAA = RatingMPAABase | Capitalize<RatingMPAABase>

type AnimeKind = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48'

type ReleaseStatus = 'anons' | 'ongoing' | 'released'

type MaterialType = 'foreign-movie' | 'soviet-cartoon' | 'foreign-cartoon' | 'russian-cartoon' | 'anime'
| 'russian-movie' | 'cartoon-serial' | 'documentary-serial' | 'russian-serial' | 'foreign-serial' | 'anime-serial'
| 'multi-part-film'

type SortType = 'year' | 'created_at' | 'updated_at' | 'kinopoisk_rating' | 'imdb_rating' | 'shikimori_rating'
type DictionarySortType = 'count'
type OrderType = 'asc' | 'desc'

type GenreType = 'kinopoisk' | 'shikimori' | 'mydramalist' | 'all'
