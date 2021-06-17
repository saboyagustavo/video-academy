import React from 'react';
import { useFetchPlaylist } from '../../api/queries/playlist';

export function Playlist() {
  const data = useFetchPlaylist('PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V');
  if (data) {
    console.log('data', data);
  }
  return (
    <div>
      <h2>FetchPlaylist</h2>
    </div>
  );
};