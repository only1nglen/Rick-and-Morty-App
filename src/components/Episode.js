import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import EpisodeCard from './EpisodeCard'
import apiUrl from '../apiConfig'

class Episode extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            airdate:"",
            episode:"",
            characters:[]
        }
    }

    async componentDidMount() {
        const episodeResponse = await axios.get(`${apiUrl}episode/${this.props.match.params.id}`)
        // console.log(episodeResponse)
        const singleEpisode = episodeResponse.data
        const characterIdsString = singleEpisode.characters.map(character => character.substring(character.lastIndexOf('/') + 1))
        // console.log(characterIdsString)
        const listOfCharIdsValues = characterIdsString.join(',')
        // console.log(listOfCharIdsValues)
        const characterResponse = await axios.get(`${apiUrl}character/${listOfCharIdsValues}`)
        const characters = characterResponse.data
        // console.log(characters, " chars")
        this.setState ({
            name: singleEpisode.name,
            airdate: singleEpisode.air_date,
            episode: singleEpisode.episode,
            characters
        })
    }

    render() {
        const { name, airdate, episode, characters } = this.state

        const charList = characters.map(character => (
            <div key={character.id}>
                    <Link to={`/characterbio/${character.id}`}>
                            <img className='cast-image' src={character.image} alt={character.name}/>
                    </Link>
            </div>
        ))

        return (
            <div>
                <EpisodeCard
                    name={name}
                    episode={episode}
                    airdate={airdate}
                    charList={charList}
                />
            </div>
        )
    }
}

export default Episode
