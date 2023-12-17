import React from 'react'
import PostCard from './postcard';


export default function PostLIst({ posts }) {
  return (
      <div>
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
  );
}