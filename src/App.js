import './App.css';

import React, {Component} from 'react';
import Header from './layout/header';
import Home from './pages/home'
import Picture from './pages/picture'
import Main from './layout/main';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <>
    <BrowserRouter>
    <div>
        <Header/>
        <Main/>
        </div>
        </BrowserRouter>
        </>
    )
  }
}

export default App
