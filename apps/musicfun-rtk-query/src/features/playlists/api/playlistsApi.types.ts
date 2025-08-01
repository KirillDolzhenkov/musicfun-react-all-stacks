import type { Images, Meta, User } from '@/shared/types/commonApi.types.ts'

export enum CurrentUserReaction {
  None = 0,
  Like = 1,
  Dislike = -1,
}

export type Playlist = {
  id: string
  type: 'playlists'
  attributes: PlaylistAttributes
}

type Tag = {
  id: string
  name: string
}

export type PlaylistAttributes = {
  title: string
  description: string
  addedAt: string
  updatedAt: string
  order: number
  tags: Tag[]
  images: Images
  user: User
  // likes
  currentUserReaction: CurrentUserReaction
  dislikesCount: number
  likesCount: number
}

// Response
export type PlaylistsResponse = {
  data: Playlist[]
  meta: Meta
}

// Arguments
export type CreatePlaylistArgs = Pick<PlaylistAttributes, 'title' | 'description'>

export type UpdatePlaylistArgs = Partial<Pick<PlaylistAttributes, 'title' | 'description' | 'tags'>>

export type FetchPlaylistsArgs = {
  pageSize?: number
  pageNumber?: number
  search?: string
  sortDirection?: 'asc' | 'desc'
  tagsIds?: string[]
  userId?: string
  trackId?: string
}
