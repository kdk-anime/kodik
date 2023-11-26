import type { TranslationType } from '../../endpoints'

export interface TranslationSharedEntity {
	id: ID
	title: string
	type: TranslationType
}
