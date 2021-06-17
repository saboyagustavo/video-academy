import { useQuery } from 'react-query';
import { fetchPlaylist } from '../../service/playlist';

export function useFetchPlaylist(playlistId) {

  const config = {
    params: {
      playlistId,
      part: 'snippet',
    }
  };

  const { data, isSuccess, isLoading, error, isFetched } = useQuery('fetchPlaylist', () => fetchPlaylist(config));
  if (error) {
    return error.message;
  }
  if (isSuccess && isFetched) {
    return data;
  }
}
