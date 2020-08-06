import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        // same as 'res'
        const episodeResponse = await axios.get(`${apiUrl}episode/${this.props.match.params.sis}`)
        // console.log(episodeResponse)
        const singleEpisode = episodeResponse.data
        const characterIdsString = singleEpisode.characters.map(character => character.substring(character.lastIndexOf('/') + 1))
        // console.log(characterIdsString)
        const listOfCharIdsValues = characterIdsString.join(',')
        // console.log(listOfCharIdsValues)
        // same as 'res'
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
                        <li>
                            {/* <img src={character.image} alt={character.name}/>{character.name} */}
                            {character.name}
                        </li>
                    </Link>
            </div>
        ))

        return (
            <div>
                Episode name : {name}
                <br />
                    {episode}
                <br />
                    Air Date: {airdate}
                <br />
                <ul>
                    Character Appearances: {charList}
                </ul>
            </div>
        )
    }
}

export default Episode
