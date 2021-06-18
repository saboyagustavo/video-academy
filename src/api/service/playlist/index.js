import { api } from '../../api';
export const fetchPlaylist = async (pageToken, config) => {
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  config.params.key = KEY;

  const { data } = await api.get('https://www.googleapis.com/youtube/v3/playlistItems', config, pageToken);
  return data;
};