import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/write';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }) => ({ tags: write.tags }));

  const onTagsChange = (nextTags) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };
  return <TagBox tags={tags} onTagsChange={onTagsChange}></TagBox>;
};

export default TagBoxContainer;
