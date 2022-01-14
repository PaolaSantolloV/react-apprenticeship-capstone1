import React from 'react';

import {
  StyledContainer,
  StyledWrapper,
  StyledWrapperButton,
} from './SearchBar.styles.jsx';
import Button from '../Button';
import Input from '../Input';
import { useGlobalContext } from '../../providers/Global.provider.jsx';

// eslint-disable-next-line react/prop-types
function SearchBar() {
  const { state, handleChange } = useGlobalContext();

  return (
    <StyledContainer>
      <StyledWrapper>
        <Input
          placeholder="Search"
          type="text"
          id="search"
          onChange={handleChange}
          value={state.inputValue}
        />
      </StyledWrapper>
      <StyledWrapperButton>
        <Button label="Search" key="search" />
      </StyledWrapperButton>
    </StyledContainer>
  );
}

export default SearchBar;
