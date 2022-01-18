import React from 'react';
import {
  StyledContainer,
  StyledWrapper,
  StyledWrapperButton,
} from './SearchBar.styles.jsx';
import Button from '../Button';
import Input from '../Input';
import { useGlobalContext } from '../../providers/Global.provider.jsx';
import getVideos from '../../selectors/getVideos.js';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function SearchBar() {
  const history = useHistory();
  const { state, handleChange, handleSaveResult } = useGlobalContext();

  const onSearch = async () => {
    getVideos(state.searchTerm)
      .then((result) => {
        handleSaveResult(result);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push('/');
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <Input
          title="search"
          placeholder="Search"
          type="text"
          id="search"
          onChange={handleChange}
          value={state.searchTerm}
        />
      </StyledWrapper>
      <StyledWrapperButton>
        <Button label="Search" onClick={onSearch} key="search" />
      </StyledWrapperButton>
    </StyledContainer>
  );
}

export default SearchBar;
