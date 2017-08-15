import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import reset from './styles/reset'; // eslint-disable-line
import theme from './styles/theme';
import Header from './components/Header';

export default () =>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>;
