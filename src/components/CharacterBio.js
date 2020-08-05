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
        const episodeIdsString = singleCharacter.episode.map(episode => episode.substring(episode.lastIndexOf('/') + 1))
        // console.log(episodeIdsString, 'string')
        const listOfEpisodeValues = episodeIdsString.join()
        // console.log(listOfEpisodeValues)
        const episodeResponse = await axios.get(`${apiUrl}/episode/${listOfEpisodeValues}`)
        const episodes = episodeResponse.data
        // console.log(episodes, "episode")
        this.setState ({
            name: singleCharacter.name,
            status: singleCharacter.status,
            img: singleCharacter.image,
            episodes
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
                    </div>
                    <div>
                        Status: {status}
                    </div>
                    <div>
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
