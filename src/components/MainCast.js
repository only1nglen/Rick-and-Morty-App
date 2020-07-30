import React from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom'

import apiUrl from '../apiConfig'

class MainCast extends React.Component {
    constructor() {
        super()

        this.state = {
            characters:[]
        }
    }

    componentDidMount() {
        axios({
            url: `${apiUrl}/character/1,2,3,4,5`,
            method: 'get'
        })
        // .then(res => console.log(res.data))
        .then(res => 
            this.setState ({
            characters: res.data
        }))
        .catch(console.error)
    }

    render() {
        const { characters } = this.state
        const characterList = characters.map(character => (
            <div key= {character.id}>
                {character.name}
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
