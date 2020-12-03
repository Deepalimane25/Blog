import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends React.Component {
  render() {
    return (
        <header>
          <nav className="top-menu">
            <ul>
              <li>Home</li>
              <li>Picture</li>
              <li>Video</li>
              <li>Messges</li>
            </ul>
          </nav>
        </header>
    )
  }
}