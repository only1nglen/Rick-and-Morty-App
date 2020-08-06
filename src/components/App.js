import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import MainCast from './MainCast'
import CharacterBio from './CharacterBio'
import Episode from './Episode'
import EpisodeListing from './EpisodeListing'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/maincast" component={MainCast} />
          <Route path="/characterbio/:bro" component={CharacterBio} />
          <Route path="/episodelisting" component={EpisodeListing} />
          <Route path="/episode/:sis"  component={Episode} />
        </div>
    )
  }
}

export default App;
