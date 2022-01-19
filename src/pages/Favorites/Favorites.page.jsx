import React from 'react';
import VideoCard from '../../components/VideoCard';
import {
  StyledContainer,
  StyledTitle,
  StyledWrapperVideos,
} from './Favorites.styles.jsx';
import { storageFavVideos } from '../../utils/storage';

function FavoritesPage() {
  const listFavVideos = storageFavVideos.get('videos');

  return (
    <div>
      {listFavVideos ? (
        <StyledWrapperVideos>
          {listFavVideos.map((videoFav) => (
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
        <StyledContainer>
          <StyledTitle>You dont have videos on favorites.</StyledTitle>
          <img width="200" src="404.gif" alt="empty list videos" />
        </StyledContainer>
      )}
    </div>
  );
}

export default FavoritesPage;
