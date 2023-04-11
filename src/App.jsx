import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;