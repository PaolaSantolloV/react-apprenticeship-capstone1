import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '../../components/IconButton';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { useGlobalContext } from '../../providers';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  StyledContainer,
  StyledVideo,
  StyledTitle,
  StyledDivider,
  StyledDescription,
  StyledWrapperVideos,
  StyledWrapperDescription,
  StyledWrapperTitle,
  StyledWrapperIcon,
} from './VideoDetail.styles.jsx';
import { storageFavVideos } from '../../utils/storage';

function VideoDetailPage(props) {
  const { state } = useGlobalContext();
  const [isLike, setIsLike] = useState(false);
  const listFavVideos = storageFavVideos.get('videos');

  const like =
    listFavVideos !== null &&
    listFavVideos.some(
      (item) => item.title === props.history.location.video.title
    );

  useEffect(() => {
    if (like === true) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [like]);

  const handleLike = () => {
    setIsLike(true);
    storageFavVideos.set(props.history.location.video);
  };

  const handleUnLike = () => {
    setIsLike(false);
    storageFavVideos.remove(props.history.location.video);
  };

  return (
    <StyledContainer>
      <div>
        <StyledVideo
          allowFullScreen
          frameBorder="0"
          title="rick-roll"
          src={`https://www.youtube.com/embed/${props.match.params.id}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <StyledWrapperDescription>
          <StyledWrapperTitle>
            <StyledTitle>{props.history.location.video.title}</StyledTitle>
            {state.authenticated && (
              <IconButton
                title="like"
                onClick={like ? handleUnLike : handleLike}
              >
                {isLike ? (
                  <StyledWrapperIcon>
                    <FaHeart color="#E72C2C" size="30px" />
                  </StyledWrapperIcon>
                ) : (
                  <StyledWrapperIcon>
                    <FaRegHeart color="#EEEEEE" size="30px" />
                  </StyledWrapperIcon>
                )}
              </IconButton>
            )}
          </StyledWrapperTitle>

          <StyledDivider />
          {props.history.location.video.description && (
            <>
              <StyledDescription>
                {props.history.location.video.description}
              </StyledDescription>
              <StyledDivider />
            </>
          )}
        </StyledWrapperDescription>
        <div className="wrapperSuggestionVideos">
          {props.history.location.video.mockVideo ? (
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
                      favorite
                    />
                  )
              )}
            </StyledWrapperVideos>
          ) : props.history.location.video.favorite ? (
            <StyledWrapperVideos>
              {listFavVideos &&
                listFavVideos.map((videoFav) => (
                  <VideoCard
                    key={videoFav.id}
                    id={videoFav.id}
                    image={videoFav.image}
                    title={videoFav.title}
                    description={videoFav.description}
                    favorite
                  />
                ))}
            </StyledWrapperVideos>
          ) : (
            <h1>videos sugerencias</h1>
          )}
        </div>
      </div>
    </StyledContainer>
  );
}

export default withRouter(VideoDetailPage);
