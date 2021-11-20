import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/post/PaginationContainer';
import PostsListContainer from '../containers/post/PostsListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
