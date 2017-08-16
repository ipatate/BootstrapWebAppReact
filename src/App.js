// @flow
import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'mobx-react';
import Store from './stores/store';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NoMatch from './components/NoMatch';
import reset from './styles/reset'; // eslint-disable-line
import theme from './styles/theme';
import Header from './components/Header';

const history = createBrowserHistory();

export default () =>
  <BrowserRouter history={history}>
    <HashRouter>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/post/:id" component={ShowPost} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </BrowserRouter>;
