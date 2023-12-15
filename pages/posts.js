/*import React from 'react'
import PostList from './postList'
export default function Posts(props) {
  return (
    <div><h1>{props.posts.length}</h1>
    <PostList postArray={props.posts}/>
    </div>
  )
}*/

import React from 'react';
import PostList from './postList';
import {useEffect, useState} from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
  }, []);

  return (
      <div>
        <h2>Posts: {posts.length}</h2>
        <p>Here is the list of my posts!</p>
        <PostList feed={posts}/>
        <button>load more</button>
      </div>
  )
}
