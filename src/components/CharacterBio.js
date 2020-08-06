import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from '../apiConfig'

class CharacterPage extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            status:"",
            img:"",
            episodes: []
        }
    }

    async componentDidMount() {
        const characterResponse = await axios.get(`${apiUrl}character/${this.props.match.params.bro}`)
        const singleCharacter = characterResponse.data
        // console.log(singleCharacter,"single char")
        const episodeIdsString = singleCharacter.episode.map(episode => episode.substring(episode.lastIndexOf('/') + 1))
        // console.log(episodeIdsString, 'string')
        const listOfEpisodeValues = episodeIdsString.join(',')
        // console.log(listOfEpisodeValues, 'listOfEpisodeValues')
        const episodeResponse = await axios.get(`${apiUrl}episode/${listOfEpisodeValues}`)
        // console.log(episodeResponse,"episodeResponse")
        const episodes = episodeResponse.data
        // console.log(episodes, "episodes")
        this.setState ({
            name: singleCharacter.name,
            status: singleCharacter.status,
            img: singleCharacter.image,
            episodes: episodes
        })
    }

    render() {
        const { name, status, img, episodes} = this.state

        const epList = episodes.map(ep => (
            <div key={ep.id}>
                    <Link to={`/episode/${ep.id}`}>
                        <li>{ep.name}</li>
                    </Link>
            </div>
        ))

        const epCount = episodes.length

        return (
            <div>
                <div>
                    <img src={img} alt="pic of character"></img>
                </div>
                    <div>
                        Name: {name}
                        <br />
                        Status: {status}
                        <br />
                        Number of Episodes Appeared in: {epCount}
                    </div>
                <hr />
                    <div>
                        List of Episode Appearance:
                        <ul>
                            {epList}
                        </ul>
                    </div>
            </div>
        );
    }
}

export default CharacterPage;
