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

    componentDidMount() {
        // axios.all([
        //     axios.get(`${apiUrl}character/${this.props.match.params.bro}`),
        //     axios.get(`${apiUrl}/episode/?page=1`),
        //     axios.get(`${apiUrl}/episode/?page=2`)
        // ])
        axios.get(`${apiUrl}character/${this.props.match.params.bro}`)
        // .then(res => console.log(res.data))
        // .then(match => console.log(this.props.match))
        .then(res => 
            this.setState ({
            name: res.data.name,
            status: res.data.status,
            img: res.data.image,
            episodes: res.data.episode
        }))
        .catch(console.error)
    }

    
    render() {
        const { name, status, img, episodes } = this.state

        const getNum = /[^/]+$/
        const clickEpi = episodes.map( (str, index) => (
            {   
                name: str, 
                id: str.match(getNum)
            }
        ))
        // console.log(clickEpi, "is clickepi")
        
        
        const epList = clickEpi.map(ep => (
            <div key={ep.id}>
                    <Link to={`/episode/${ep.id}`}><li>Episode {ep.name.match(getNum)}</li></Link>
            </div>
        ))

        const epCount = episodes.length

        return (
            <div>
                <img src={img} alt="pic of character"></img>
                <br />
                    Name: {name}
                <br />
                    Status: {status}
                    <br />
                    Number of Episodes Appeared in: {epCount}
                <hr />
                    List of Episode Appearance:
                <ul>
                    {epList}
                </ul>
                
            </div>
        );
    }
}

export default CharacterPage;
