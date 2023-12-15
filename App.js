// App.jsx
import React, { useState } from 'react';
import Header from './header.js';
// import logo from './logo.svg';
import './App.css';
import Mas from './components/mas.js';
import Test from './components/test.js';
import Events from './components/events.js';
import Footer from './components/footer.js';
import Main from './components/main.js';
import Home from './pages/home.js';
import Posts from './pages/posts.js';
import Post from './pages/post.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Admin from './pages/admin.js';
import { Outlet } from 'react-router-dom';
import NewPostForm from './pages/new-post-form.js';

function App() {
  const [posts, setPosts] = useState([]);

  const onAddPost = (post) => {
    setPosts([...posts, post]);
  }

  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <NewPostForm /> */}

      {/* <Main /> */}
      {/* <Home /> */}
      <Posts posts={posts}/>
      {/* <Post /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Admin onAddPost={onAddPost} />
      <Footer />
    </div>
  );
}

export default App;
