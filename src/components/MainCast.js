import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

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
    }

    render() {
        const { characters } = this.state
        const characterList = characters.map(character => (
            <div key= {character.id}>
                <Card className="char-card" style={{ width: '14rem' }}>
                    <Link to={`/characterbio/${character.id}`}>
                        <Card.Img variant="top" src={character.image} />
                    </Link>
                    <Card.Body>
                        <Card.Title className="main-cast-title-card">{character.name}</Card.Title>
                        {/* <Button variant="outline-success">
                            <Link to={`/characterbio/${character.id}`}>More Info</Link>
                        </Button> */}
                    </Card.Body>
                </Card>
            </div>
        ))

        return (
            <div>
                <h1 className="main-cast-title">The Family </h1>
                <div className="main-cast">
                    {characterList}
                </div>
            </div>
        );
    }
}

export default MainCast
