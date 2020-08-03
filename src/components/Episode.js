import React, { Component } from 'react'
import axios from 'axios'

import apiUrl from '../apiConfig'

class Episode extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            airdate:"",
            episode:"",
            characters:[],
            newCharList: []
        }
    }

    componentDidMount() {
        axios.get(`${apiUrl}episode/${this.props.match.params.sis}`)
        // .then(res => console.log(res.data))
        .then(res => 
            this.setState ({
                name: res.data.name,
                airdate: res.data.air_date,
                episode: res.data.episode,
                characters: res.data.characters
            }))
            .then(  this.setState ({
                newCharList:  Object.fromEntries(this.state.characters)
            }) )
        .catch(console.error)
    }

    render() {
        // const { characters } = this.state
        // const newList =  Object.fromEntries(characters)
        // console.log(newList)
        // console.log(this.state.newCharList)
        return(
            <div>
                {/* {this.state.characters} */}
                Episode name : {this.state.name}
                <br />
                {this.state.episode}
                <br />
                Air Date: {this.state.airdate}
                <br />
                {/* {this.state.newCharList} */}
            </div>
        )
    }
}

export default Episode
