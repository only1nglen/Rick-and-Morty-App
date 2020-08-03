import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './NavBar'
import Home from './Home'
import MainCast from './MainCast'
import About from './About'
import CharacterBio from './CharacterBio'
import Episode from './Episode'
import EpisodeListing from './EpisodeListing'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/maincast" component={MainCast} />
          <Route path="/about" component={About} />
          <Route path="/characterbio/:bro" component={CharacterBio} />
          <Route path="/episodelisting" component={EpisodeListing} />
          <Route path="/episode/:sis"  component={Episode} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
