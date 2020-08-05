import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from './../apiConfig'

class EpisodeListing extends Component {
    constructor(){
        super()
        this.state = {
            allEpisodes:[]
        }
    }

   async componentDidMount() {
        const [episodeResponsePageOne, episodeResponsePageTwo] = await axios.all([ 
            axios.get(`${apiUrl}/episode/?page=1`),
            axios.get(`${apiUrl}/episode/?page=2`)
        ])
        // console.log(episodeResponsePageOne.data.results, episodeResponsePageTwo.data.results)
        const episodePageOne = episodeResponsePageOne.data.results
        const episodePageTwo = episodeResponsePageTwo.data.results
        const allEpisodes = episodePageOne.concat(episodePageTwo)
        // console.log(allEpisodes)
        this.setState ({
            allEpisodes
        })
    }

    render(){
        const { allEpisodes } = this.state

        const episodeList = allEpisodes.map(episode => (
            <div key={episode.id}>
                <Link to={`/episode/${episode.id}`}>
                    {episode.name}
                </Link>
            </div>
        ))

        return(
            <div>
                {episodeList}
            </div>
    )}
}

export default EpisodeListing
