import { Route, Routes } from 'react-router'

import { Layout } from '@/layout'
import { MainPage, PlaylistPage, PlaylistsPage, TrackPage, TracksPage, UserPage } from '@/pages'

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />

      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/tracks/:id" element={<TrackPage />} />

      <Route path="/playlists" element={<PlaylistsPage />} />
      <Route path="/playlists/:id" element={<PlaylistPage />} />

      <Route path="/user/:id" element={<UserPage />} />
    </Route>
  </Routes>
)
