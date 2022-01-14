import React, { useEffect, useState } from 'react';
import VideoCard from '../../components/VideoCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard.component';
import { StyledContainer, StyledWrapperVideos } from './Home.styles.jsx';
import { useGlobalContext } from '../../providers/Global.provider';
import getVideos from '../../selectors/getVideos';

function HomePage() {
  const { state, handleSaveResult } = useGlobalContext();
  const [isVideos, setIsVideos] = useState(Boolean(state.searchResult.lenght));
  const [isChannel, setIsChannel] = useState(false);

  useEffect(() => {
    if (isVideos === false) {
      console.log('pet');
      getVideos(state.searchTerm)
        .then((result) => {
          handleSaveResult(result);
          setIsVideos(true);
          console.log(result);
          if (result.videosMetaInfo[0].id.channelId) {
            setIsChannel(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isVideos, state.searchTerm, handleSaveResult]);

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
      ) : (
        <h2>
          Ha ocurrido un error en la busqueda por favor vuelve a intentarlo
        </h2>
      )}
    </StyledContainer>
  );
}

export default HomePage;
