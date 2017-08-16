// @flow
import React from 'react';
import Store from '../stores/store';
import { syncPosts } from '../actions/actions';
import PostList from './PostList';

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
    this.store = Store;
    if (this.store.posts.length < 1) {
      try {
        syncPosts();
      } catch (error) {
        throw error;
      }
    }
  }
  store: StoreType;
  render() {
    return (
      <div>
        <h1>Movies List</h1>
        <PostList />
      </div>
    );
  }
}
export default Home;
