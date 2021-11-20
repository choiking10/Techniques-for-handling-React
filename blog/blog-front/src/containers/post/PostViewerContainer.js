import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostViewer from '../../components/post/PostViewer';
import { unloadPost, readPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));
  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [postId, dispatch]);
  return <PostViewer post={post} error={error} loading={loading} />;
};

export default withRouter(PostViewerContainer);
