import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './NavBar'
import Home from './Home'
import MainCast from './MainCast'
import About from './About'
import CharacterPage from './CharacterPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/maincast" component={MainCast} />
          <Route path="/about" component={About} />
          <Route path="/characterpage/:id" render={({ match }) => 
            <CharacterPage match={match} /> } />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
