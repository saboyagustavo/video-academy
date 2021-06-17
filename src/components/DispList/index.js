import React from 'react';

export function DispList({ data }) {
  return (
    <>
      <div className="center">
        <h2 className="green-text text-darken-4">{data.items[0].snippet.channelTitle}</h2>
        <div className="container">

          <div className="row">
            {data.items.map((item, index) => (
              <div key={index}>
                <div className="col s4">
                  <div className="card small">
                    <div className="card-image">
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={`${item.snippet.channelTitle} video cover`} />
                    </div>
                    <div className="card-content">
                      <p>{item.snippet.title}</p>
                    </div>
                    <div className="card-action">
                      <a
                        href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch this video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
