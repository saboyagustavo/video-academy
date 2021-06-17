import React from 'react';
import { useFetchPlaylist } from '../../api/queries/playlist';
import { DispList } from '../DispList';

export function Playlist() {
  const { data, error, isLoading } = useFetchPlaylist('PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V');
  return (
    <>
      {error && <span className="errorMessage"> Something went wrong. Please, try again.</span>}
      {isLoading
        ? <span span className="warningMessage"> Loading, please wait...</span>
        : <DispList data={data} />}
    </>
  );
};