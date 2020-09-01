import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import MainCast from './MainCast'
import CharacterBio from './CharacterBio'
import Episode from './Episode'
import EpisodeGuide from './EpisodeGuide'
import Search from './Search'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/maincast" component={MainCast} />
          <Route path="/characterbio/:bro" component={CharacterBio} />
          <Route path="/episodeguide" component={EpisodeGuide} />
          <Route path="/episode/:sis"  component={Episode} />
          <Route path="/search"  component={Search} />
        </div>
    )
  }
}

export default App;
