import React from 'react';
import {Route, HashRouter} from 'react-router-dom'

import './App.css';

import Home from './home'
import Away from './Away'
import Nav from './Nav'
import Third from './Third'

function App() {
  return (
    <HashRouter>
      <div className="test">
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/away" component={Away}/>
        <Route path="/third" component={Third}/>
      </div>
    </HashRouter>
  );
}

export default App;
