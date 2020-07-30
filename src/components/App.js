import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './NavBar'
import Home from './Home'
import MainCast from './MainCast'
import About from './About'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/MainCast" component={MainCast} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
