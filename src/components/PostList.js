// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

type Props = {
  store: StoreType,
};

const List = styled.ul`
  list-type: none;
  display: flex;
  flex-direction: column;
`;
const ListElement = styled.li`
  display: flex;
  min-height: 60px;
`;

export const PostList = (props: Props) => {
  if (props.store && props.store.posts) {
    return (
      <List>
        {props.store.posts.map(post =>
          <ListElement key={post.show.id}>
            <Link to={`/post/${post.show.id}`}>
              {post.show.name}
            </Link>
          </ListElement>,
        )}
      </List>
    );
  }
  return <div />;
};

export default inject('store')(observer(PostList));
