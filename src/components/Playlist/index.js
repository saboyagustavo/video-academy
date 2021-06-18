import React, { useState } from 'react';
import { useFetchPlaylist } from '../../api/queries/playlist';
import { DispList } from '../DispList';

export function Playlist() {
  const [pageToken, setPageToken] = useState();
  const { data, error, isLoading } = useFetchPlaylist('PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V', pageToken);
  return (
    <>
      {error && <span className="errorMessage"> Something went wrong. Please, try again.</span>}
      {isLoading
        ? <span className="warningMessage"> Loading, please wait...</span>
        : (
          <>
            <div className="center">
              <h2 className="green-text text-darken-4">
                {data.items[0].snippet.channelTitle}
              </h2>
              <DispList data={data} />
              <button
                className="btn"
                onClick={() => {
                  console.log(data);
                  setPageToken(data.prevPageToken);
                }}
              >
                Prev
              </button>
              <button
                className="btn"
                onClick={() => {
                  setPageToken(data.nextPageToken);
                  console.log(pageToken);
                }}
              >
                Next
              </button>
            </div>
          </>

        )}
    </>
  );
};;;