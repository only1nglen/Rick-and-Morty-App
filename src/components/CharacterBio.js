import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CharacterCard from './CharacterCard'
import apiUrl from '../apiConfig'

class CharacterPage extends Component {
    constructor() {
        super()
        this.state = {
            character:"",
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
        const makeAnArray = function(episodes) {
            let temporaryEpisodeList=[]
            if(!Array.isArray(episodes)){
                temporaryEpisodeList.push(episodes)
                return temporaryEpisodeList
            }else {
                return episodes
            }
        }
        const finalEpisodesList = makeAnArray(episodes)
        this.setState ({
            episodes: finalEpisodesList,
            character: singleCharacter
        })
    }

    render() {
        const { character, episodes} = this.state

        const epList = episodes.map(ep => (
            <tr key={ep.id}>
                <td>
                    <Link to={`/episode/${ep.id}`}>
                    {ep.name}
                    </Link>
                </td>
            </tr>
        ))
        
        const epCount = episodes.length

        return (
            <div>
                <CharacterCard  
                    character={character}
                    epCount={epCount} 
                    epList={epList}
                />
            </div>
        );
    }
}

export default CharacterPage;
