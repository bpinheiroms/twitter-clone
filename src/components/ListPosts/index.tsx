import { useEffect, useState } from 'react';
import useGetFeedList from '../../hooks/useGetFeedList';
import { IPostItem } from '../../interfaces';
import Post from '../PostItem';
import SpinnerAnimated from '../SpinnerAnimated';

const ListPosts = () => {
  const { loading, data, fetchData } = useGetFeedList();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerAnimated />
      ) : (
        <>
          {data?.map((post: IPostItem) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
    </>
  );
};

export default ListPosts;
