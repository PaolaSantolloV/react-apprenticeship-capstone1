import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaUserAlt,
  FaDoorOpen,
  FaBars,
  FaRegWindowClose,
} from 'react-icons/fa';
import { useGlobalContext } from '../../providers';
import SearchBar from '../SearchBar';
import IconButton from '../IconButton';
import Modal from '../Modal';

import {
  StyledHeader,
  StyledWrapperIcon,
  StyledWrapperIconClose,
} from './Header.styles.jsx';
import LoginForm from '../LoginForm';
import Menu from '../Menu';
import Switch from '../Switch/Switch.component';

// eslint-disable-next-line react/prop-types
function Header() {
  const history = useHistory();
  const { logout, login, toggleTheme, state } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function authenticate(event, loginData) {
    event.preventDefault();
    login(loginData);
    if (state.error === true) {
      setShowModal(true);
    } else {
      setShowModal(false);
      history.push('/');
    }
  }

  return (
    <StyledHeader>
      <Modal
        title="modalDiv"
        show={showModal}
        handleClose={() => setShowModal(false)}
      >
        <LoginForm authenticate={authenticate} error={state.error} />
      </Modal>
      {showMenu ? (
        <IconButton
          title="hideMenu"
          styles="iconButtonClose"
          onClick={() => setShowMenu(false)}
        >
          <StyledWrapperIconClose>
            <FaRegWindowClose color="#EEEEEE" size="30px" />
          </StyledWrapperIconClose>
        </IconButton>
      ) : (
        <IconButton title="menu" onClick={() => setShowMenu(true)}>
          <StyledWrapperIcon>
            <FaBars color="#EEEEEE" size="30px" />
          </StyledWrapperIcon>
        </IconButton>
      )}

      {showMenu && <Menu setShowMenu={setShowMenu} />}

      <SearchBar />
      <Switch
        isOn={state.isDark}
        handleToggle={toggleTheme}
        label="Dark Mode"
      />

      {state.authenticated ? (
        <IconButton title="iconLogout" onClick={deAuthenticate}>
          <StyledWrapperIcon>
            <FaDoorOpen color="#EEEEEE" size="40px" />
          </StyledWrapperIcon>
        </IconButton>
      ) : (
        <IconButton title="iconLogin" onClick={() => setShowModal(true)}>
          <StyledWrapperIcon>
            <FaUserAlt color="#EEEEEE" size="40px" />
          </StyledWrapperIcon>
        </IconButton>
      )}
    </StyledHeader>
  );
}

export default Header;
