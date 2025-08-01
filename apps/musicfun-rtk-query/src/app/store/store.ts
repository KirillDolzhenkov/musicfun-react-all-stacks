import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from '@/features/auth'
import { playlistsSlice } from '@/features/playlists'

import { baseApi } from '../api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [playlistsSlice.name]: playlistsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
