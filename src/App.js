import React from 'react';
import { ThemeProvider } from 'styled-components';
import reset from './styles/reset'; // eslint-disable-line
import theme from './styles/theme';
import Header from './components/Header';

export default () =>
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <div>Hello World !!</div>
    </div>
  </ThemeProvider>;
