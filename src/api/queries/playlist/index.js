import { useQuery } from 'react-query';
import { fetchPlaylist } from '../../service/playlist';

export function useFetchPlaylist(playlistId) {

  const config = {
    params: {
      playlistId,
      part: 'snippet',
    }
  };

  const { data, isSuccess, isLoading, error } = useQuery('fetchPlaylist', () => fetchPlaylist(config));
  return { data, isSuccess, isLoading, error };
}

