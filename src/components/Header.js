// @flow
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.fg};
`;

const Header = () =>
  <div>
    <H1>Header</H1>
  </div>;

export default Header;
