import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Posts from './pages/posts';
import Admin from './pages/admin';
import Contact from './pages/contact';
import Post from './pages/post';
import ContactPage from './pages/contactpage';
import Home from './pages/home';
import PostPage from './pages/postpage';
import NewPostForm from './pages/new-post-form';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/new-post-form',
        element: <NewPostForm />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
