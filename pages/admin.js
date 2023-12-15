import React from 'react'

export default function Admin({onAddPost}) {
    const handleNewPostSubmit = (event) => {
    event.preventDefault();
    
        const {title, body} = event.target.elements;
        onAddPost({
            title: title.value,
            body: body.value
          })
      
        }
        return (
            <div>
              <h1>Admin</h1>
              <form onSubmit={handleNewPostSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text"/>
                <label htmlFor="body">Content</label>
                <textarea id="body" name="body"/>
                <button type="submit">Create</button>
              </form>
            </div>
        );
      }
