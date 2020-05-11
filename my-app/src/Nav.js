import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  
  const navStyle = {
    color:'black'
  };

  return (
    <nav>
      <ul className='nav-text'>
        <Link style={navStyle} to= '/'><li>imgur</li></Link>
        <Link style={navStyle} to='/newpost'><li>NewPost</li></Link>
        <Link style={navStyle} to='/about'><li>About</li></Link>
        <Link style={navStyle} to='/login'><li>Login</li></Link>
        <Link style={navStyle} to='/logout'><li>Logout</li></Link>
        <Link style={navStyle} to='/Register'><li>Register</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;