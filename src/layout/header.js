import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

// import { NavLink } from "react-router-dom";


import './header.css';

export default class Header extends React.Component {
  render() {
    return (
        <header>
          <nav className="top-menu">
            <ul>
        <li><Link to='/'>Home</Link></li>
              <li><Link to='/picture'> Picture</Link></li>
              <li><Link to='./video'>Video</Link></li>
              {/* <li><Link to='./message'>Messages</Link></li> */}
            </ul>
          </nav>
        </header>
        
    )
  }
};
