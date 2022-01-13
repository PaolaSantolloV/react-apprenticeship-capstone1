import React from 'react';

import {
  StyledContainer,
  StyledWrapper,
  StyledWrapperButton,
} from './SearchBar.styles.jsx';
import Button from '../Button';
import Input from '../Input';

// eslint-disable-next-line react/prop-types
function SearchBar() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Input placeholder="Search" type="text" id="search" />
      </StyledWrapper>
      <StyledWrapperButton>
        <Button label="Search" key="search" />
      </StyledWrapperButton>
    </StyledContainer>
  );
}

export default SearchBar;
