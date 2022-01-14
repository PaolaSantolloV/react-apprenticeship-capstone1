import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer, StyledP } from './Menu.styles.jsx';
import { useGlobalContext } from '../../providers';

// eslint-disable-next-line react/prop-types
function Menu({ setShowMenu }) {
  const { state } = useGlobalContext();

  return (
    <StyledContainer>
      <Link to="/" onClick={() => setShowMenu(false)}>
        <StyledP>Home</StyledP>
      </Link>
      {state.authenticated && (
        <Link to="/favorites" onClick={() => setShowMenu(false)}>
          <StyledP>Favorites</StyledP>
        </Link>
      )}
    </StyledContainer>
  );
}

export default Menu;
