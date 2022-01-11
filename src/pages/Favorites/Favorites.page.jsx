import React from 'react';

import VideoCard from '../../components/VideoCard';
import { StyledContainer, StyledTitle } from './Favorites.styles.jsx';

function FavoritesPage(listFav) {
  return (
    <div>
      {!!listFav.lenght > 0 ? (
        listFav.map((videoFav) => (
          <VideoCard
            key={videoFav.etag}
            id={videoFav.id.videoId}
            image={videoFav.snippet.thumbnails.medium}
            title={videoFav.snippet.title}
            description={videoFav.snippet.description}
            mockVideo
          />
        ))
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
