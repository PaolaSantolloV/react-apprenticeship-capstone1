import React from 'react';
import VideoCard from '../../components/VideoCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard.component';
import { StyledContainer, StyledWrapperVideos } from './Home.styles.jsx';
import { useGlobalContext } from '../../providers/Global.provider';
import { useFetch } from '../../hooks/useFetch';

function HomePage() {
  const { state } = useGlobalContext();
  const { isVideos, isChannel, error } = useFetch();

  return (
    <StyledContainer>
      {isVideos === true ? (
        <>
          {isChannel === true && (
            <ChannelCard
              description={
                state.searchResult.videosMetaInfo[0].snippet.description
              }
              logo={
                state.searchResult.videosMetaInfo[0].snippet.thumbnails.default
              }
              title={state.searchResult.videosMetaInfo[0].snippet.title}
            />
          )}
          <StyledWrapperVideos>
            {state.searchResult.videosMetaInfo.map(
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
      ) : error ? (
        <h2>Ha ocurrido un error. Probablemente se acabaron las peticiones</h2>
      ) : (
        <h2>Cargando...</h2>
      )}
    </StyledContainer>
  );
}

export default HomePage;
