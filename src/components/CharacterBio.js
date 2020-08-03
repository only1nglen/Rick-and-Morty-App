import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

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
            episodes: res.data.episode,
        }))
        .catch(console.error)
    }

    
    render() {
        const { name, status, img } = this.state

        // const epList = episodes.map(ep => (
        //     <div key={ep.id}>
        //             <Link to={`/episode/${ep.id}`}><li>{ep}</li></Link>
        //     </div>
        // ))

        // const epList = episodes.map(ep => (
        //     <div key={ep}>
        //             <li>{ep}</li>
        //     </div>
        // ))

        // const epCount = episodes.length

        return (
            <div>
                <img src={img} alt="pic of character"></img>
                <br />
                    Name: {name}
                <br />
                    Status: {status}
                    <br />
                    {/* Number of Episodes Appeared in: {epCount} */}
                {/* <hr /> */}
                    {/* List of Episode Appearance:
                <ol>
                    {epList}
                </ol> */}
                
            </div>
        );
    }
}

export default CharacterPage;
