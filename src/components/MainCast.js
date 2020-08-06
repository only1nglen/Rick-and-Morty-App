import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import apiUrl from '../apiConfig'

class MainCast extends Component {
    constructor() {
        super()
        this.state = {
            characters:[]
        }
    }

    async componentDidMount() {
        const characterResponse = await axios.get(`${apiUrl}character/1,2,3,4,5`)
        const characters = characterResponse.data
        this.setState ({
            characters
        })
        // .then(res => console.log(res.data))
        // .then(res => 
        //     this.setState ({
        //     characters: res.data
        // }))
        // .catch(console.error)
    }

    render() {
        const { characters } = this.state
        const characterList = characters.map(character => (
            <div key= {character.id}>
                <Link to={`/characterbio/${character.id}`}>{character.name}</Link>
            </div>
        ))

        return (
            <div>
                <h4>The Family </h4>
                <div>
                    {characterList}
                </div>
            </div>
        );
    }
}

export default MainCast;
