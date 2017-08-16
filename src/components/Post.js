// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';
import Store from '../stores/store';

type Props = {
  store: StoreType,
};
export class Post extends React.Component {
  static defaultProps = {
    store: Store,
  };
  props: Props;
  render() {
    if (this.props.store.post) {
      const StrippedString = this.props.store.post.summary.replace(/(<([^>]+)>)/gi, '');
      const name = this.props.store.post ? this.props.store.post.name : '';
      return (
        <div>
          <h3>
            {name}
          </h3>
          <div>
            {StrippedString}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default inject('store')(observer(Post));
