import React from 'react'

import {Link} from "react-router-dom";

export default function PostCard({ post }) {
  return (
      <div className='card'>
        <div className='card-header'>
          {post.title}
        </div>
        <div className='card-body'>
          {post.body}
        </div>
        <Link to={ `/posts/${post.id}` }
              className='btn btn-primary'>
          Read more
        </Link>
      </div>
  )
}
