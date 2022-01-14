import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useGlobalContext } from '../../providers/Global.provider.jsx';
import {
  StyledContainer,
  StyledImage,
  StyledWrapper,
  StyledTitle,
  StyledDescription,
  StyledWrapperIcon,
  StyledWrapperTitle,
} from './VideoCard.styles.jsx';
import { storageFavVideos } from '../../utils/storage';
import IconButton from '../IconButton/IconButton.component.jsx';

// eslint-disable-next-line react/prop-types
function VideoCard({ image, id, title, description, mockVideo, favorite }) {
  const { state } = useGlobalContext();
  const videoInfo = {
    title: title,
    description: description,
    mockVideo: mockVideo,
    image: image,
    id: id,
    favorite: favorite,
  };

  const [isLike, setIsLike] = useState(false);
  const listFavVideos = storageFavVideos.get('videos');

  const like = listFavVideos.some((item) => item.title === title);

  useEffect(() => {
    if (like === true) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [like]);

  const handleLike = () => {
    setIsLike(true);
    storageFavVideos.set(videoInfo);
  };

  const handleUnLike = () => {
    setIsLike(false);
    storageFavVideos.remove(videoInfo);
  };

  return (
    <StyledContainer>
      <Link
        to={{
          pathname: '/' + id,
          video: videoInfo,
        }}
      >
        <StyledImage src={image.url} alt={title} />
      </Link>
      <StyledWrapper>
        <StyledWrapperTitle>
          <StyledTitle> {title}</StyledTitle>
          {state.authenticated && (
            <IconButton onClick={like ? handleUnLike : handleLike}>
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
        <StyledDescription>{description}</StyledDescription>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default VideoCard;
