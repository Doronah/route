import React from 'react'
import {createContext, useEffect, useState} from "react";
export const BlogContext = createContext(null);


export default function BlogProvider({children}) {
    const [posts, SetPosts] = useState([]);

    const addPost = (post) =>{
        SetPosts([...posts,post])
    }
    const value = { posts, addPost };
  return (

    <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
  )
}
