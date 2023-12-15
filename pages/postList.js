import React from 'react'
import PostCard from './postcard';


export default function PostLIst({ feed }) {
  return (
      <div>
        {feed.map((post) => <PostCard singlePost={post} />)}
      </div>
  );
}