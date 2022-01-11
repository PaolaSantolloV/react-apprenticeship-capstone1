import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '../../components/IconButton';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { youtubeVideosMock } from '../../utils/mocks/youtube-videos-mock';
import { useAuth } from '../../providers/Auth';
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

function VideoDetailPage(props) {
  const { authenticated } = useAuth();
  const [isLike, setIsLike] = useState(false);

  return (
    <StyledContainer>
      <div>
        <StyledVideo
          allowFullScreen
          frameBorder="0"
          title="rick roll"
          src={`https://www.youtube.com/embed/${props.match.params.id}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <StyledWrapperDescription>
          <StyledWrapperTitle>
            <StyledTitle>{props.history.location.video.title}</StyledTitle>
            {authenticated && (
              <IconButton onClick={() => setIsLike(!isLike)}>
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
          ) : (
            <h1>videos sugerencias</h1>
          )}
        </div>
      </div>
    </StyledContainer>
  );
}

export default withRouter(VideoDetailPage);
