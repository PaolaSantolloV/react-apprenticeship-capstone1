import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 4;

  display: ${(props) => props.display};
`;

export const StyledModalMain = styled.section`
  position: fixed;
  background: ${({ theme }) => theme.body};
  border-radius: 8px;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 545px) {
    top: 40%;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  place-content: flex-end;
  margin-bottom: -40px;
`;

export const StyledWrapperIcon = styled.div`
  display: flex;
  margin: 10px;
`;
