import React, { useState, useEffect } from "react";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
// focus

  const handleFormSubmit = (e) => {
    e.preventDefault();

  //  g
  };

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          required
        />
      </div>
      <button type="submit" onSubmit={handleFormSubmit}>
        Create
      </button>
    </form>
  );
}
