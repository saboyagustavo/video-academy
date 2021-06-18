import { useQuery } from 'react-query';
import { fetchPlaylist } from '../../service/playlist';

export function useFetchPlaylist(playlistId, pageToken) {

  const config = {
    params: {
      playlistId,
      part: 'snippet',
      maxResults: 6,
      pageToken: pageToken,
    }
  };

  const { data, isSuccess, isLoading, error } = useQuery(['fetchPlaylist', pageToken], () => fetchPlaylist(pageToken, config));
  return { data, isSuccess, isLoading, error };
}

