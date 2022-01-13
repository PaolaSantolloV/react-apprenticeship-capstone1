import React from 'react';

import VideoCard from '../../components/VideoCard';
import { youtubeVideosMock } from '../../utils/mocks/youtube-videos-mock';
import ChannelCard from '../../components/ChannelCard/ChannelCard.component';
import { StyledContainer, StyledWrapperVideos } from './Home.styles.jsx';

function HomePage() {
  const isVideos = Boolean(youtubeVideosMock);
  const isChannel = Boolean(youtubeVideosMock.items[0].id.channelId);

  return (
    <StyledContainer>
      {isVideos ? (
        <>
          {isChannel && (
            <ChannelCard
              description={youtubeVideosMock.items[0].snippet.description}
              logo={youtubeVideosMock.items[0].snippet.thumbnails.default}
              title={youtubeVideosMock.items[0].snippet.title}
            />
          )}
          <StyledWrapperVideos>
            {youtubeVideosMock.items.map(
              (video) =>
                video.id.videoId && (
                  <VideoCard
                    key={video.etag}
                    id={video.id.videoId}
                    image={video.snippet.thumbnails.medium}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    mockVideo
                  />
                )
            )}
          </StyledWrapperVideos>
        </>
      ) : (
        <h2>Error</h2>
      )}
    </StyledContainer>
  );
}

export default HomePage;
