// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

type Props = {
  store: StoreType
};

export const PostList = (props: Props) => {
  if (props.store && props.store.posts) {
    return (
      <div>
        {props.store.posts.map(post =>
          <li key={post.show.id}>
            <Link to={`/post/${post.show.id}`}>
              {post.show.name}
            </Link>
          </li>
        )}
      </div>
    );
  }
  return <div />;
};

export default inject('store')(observer(PostList));
