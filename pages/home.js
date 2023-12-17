import React from 'react'
import {Link} from "react-router-dom";

export default function Home() {
  return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to My Blog!</h1>
            <p className="lead text-body-secondary">
              Happy to see ypu here! I'm Doron. I'm a student in hitech school
              i lern frontend programing.
              I hope you will enjoy my blog.
            </p>
            <p>
              <Link to="/posts" className="btn btn-primary my-2">Go to posts</Link>
              <Link to="/new-post-form" className="add_post">Go to add new post</Link>
            </p>
          </div>
        </div>
      </section>
  );
}