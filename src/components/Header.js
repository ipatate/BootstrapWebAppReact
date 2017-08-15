// @flow
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.fg};
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

const NavElem = styled.li`padding: .5rem;`;

const Header = () =>
  <div>
    <H1>Header</H1>
    <Nav>
      <NavElem>
        <Link to="/">Home</Link>
      </NavElem>
      <NavElem>
        <Link to="/about">About</Link>
      </NavElem>
      <NavElem>
        <Link to="/abodsddsdut">Lol</Link>
      </NavElem>
    </Nav>
  </div>;

export default Header;
