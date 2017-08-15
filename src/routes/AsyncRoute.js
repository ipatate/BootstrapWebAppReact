// @flow

import React, { Component } from 'react';
import Spinner from '../components/Spinner';

type Props = {
  props: mixed,
  loadingPromise: Promise<{ default: React.Component<*, *, *> }>
};

type State = {
  loaded: boolean
};

class AsyncRoute extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  state: State;
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  component: React.Component<*, *, *>;
  props: Props;
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

export default AsyncRoute;
