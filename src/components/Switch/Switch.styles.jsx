import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;

export const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eeeeee;
  transition: 0.4s;
  border-radius: 10px;
  width: 35px;

  &:before {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  margin-top: -10px;

  ${StyledInput}:checked + ${StyledSpan} {
    background-color: #737a9b;
  }
  ${StyledInput}:checked + ${StyledSpan}:before {
    transform: translateX(13px);
  }
`;

export const StyledLabel = styled.h1`
  font-size: x-small;
  font-weight: 200;
  color: ${({ theme }) => theme.text};
`;
