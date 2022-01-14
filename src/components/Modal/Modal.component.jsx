import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

import IconButton from '../IconButton';

import {
  StyledModal,
  StyledModalMain,
  StyledWrapper,
  StyledWrapperIcon,
} from './Modal.styles.jsx';

// eslint-disable-next-line react/prop-types
function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? 'block' : 'none';

  return (
    <StyledModal display={showHideClassName}>
      <StyledModalMain>
        <StyledWrapper>
          <IconButton title="closeWindow" onClick={handleClose}>
            <StyledWrapperIcon>
              <FaWindowClose color="#EEEEEE" size="30px" />
            </StyledWrapperIcon>
          </IconButton>
        </StyledWrapper>
        {children}
      </StyledModalMain>
    </StyledModal>
  );
}

export default Modal;
