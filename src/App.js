import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import AsyncRoute from './routes/AsyncRoute';
import reset from './styles/reset'; // eslint-disable-line
import theme from './styles/theme';
import Header from './components/Header';

export default () =>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={props => <AsyncRoute props={props} loadingPromise={import('./components/Home')} />}
          />
          <Route
            path="/about"
            component={props => <AsyncRoute props={props} loadingPromise={import('./components/About')} />}
          />
          <Route component={props => <AsyncRoute props={props} loadingPromise={import('./components/NoMatch')} />} />
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>;
