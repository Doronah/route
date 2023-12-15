import {Link} from "react-router-dom";

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Doron Ahalota | Blog</a>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/posts">Posts</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/contact">Contact</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/new-post-form">newpost</Link>
            </li>
            
          </ul>
        </div>
      </nav>
  );
}