// @flow
import React from 'react';
import Store from '../stores/store';
import { findPost } from '../actions/actions';
import Post from './Post';

type Props = {
  post: Object,
  history: Object,
  location: Object,
  match: Object,
};

class ShowPost extends React.Component {
  constructor(props: Props) {
    super(props);
    this.store = Store;
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    if (id) {
      try {
        findPost(id);
      } catch (error) {
        throw error;
      }
    }
  }
  store: StoreType;
  render() {
    return (
      <div>
        <Post {...this.props} />
      </div>
    );
  }
}

export default ShowPost;
