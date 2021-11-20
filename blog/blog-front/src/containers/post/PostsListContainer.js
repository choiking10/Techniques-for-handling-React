import qs from 'qs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostList from '../../components/post/PostList';
import { listPosts } from '../../modules/posts';
const PostsListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, loading, error, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    })
  );
  useEffect(() => {
    const username = match.parse;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, page, username }));
  }, [dispatch, match, location]);
  return (
    <PostList
      posts={posts}
      loading={loading}
      error={error}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostsListContainer);
