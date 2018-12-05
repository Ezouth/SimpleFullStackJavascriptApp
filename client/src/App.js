import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/Home.js';
import About from './components/views/About.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home/>}></Route>
          <Route excat path='/About' render={() => <About/>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
