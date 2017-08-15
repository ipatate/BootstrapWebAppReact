// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Spin from '../assets/spin.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Rotate = styled.div`animation: ${spin} 4s infinite linear;`;

const Spinner = () =>
  <Rotate>
    <Spin />
  </Rotate>;

export default Spinner;
