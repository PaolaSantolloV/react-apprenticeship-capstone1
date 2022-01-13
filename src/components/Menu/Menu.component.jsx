import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer, StyledP } from './Menu.styles.jsx';
import { useAuth } from '../../providers/Auth';

// eslint-disable-next-line react/prop-types
function Menu({ setShowMenu }) {
  const { authenticated } = useAuth();

  return (
    <StyledContainer>
      <Link to="/" onClick={() => setShowMenu(false)}>
        <StyledP>Home</StyledP>
      </Link>
      {authenticated && (
        <Link to="/favorites" onClick={() => setShowMenu(false)}>
          <StyledP>Favorites</StyledP>
        </Link>
      )}
    </StyledContainer>
  );
}

export default Menu;
