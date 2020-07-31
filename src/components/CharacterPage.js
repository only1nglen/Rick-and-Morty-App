import React from 'react';
import axios from 'axios'
// import { Link, Redirect } from 'react-router-dom'

import apiUrl from '../apiConfig'

class CharacterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            img:""
        }
    }

    componentDidMount() {
        axios({
            url: `${apiUrl}character/${this.props.match.params.id}`,
            method: 'GET'
        })
        // .then(res => console.log(res.data))
        .then(res => 
            this.setState ({
            name: res.data.name,
            img: res.data.image
        }))
        .catch(console.error)
    }

    
    render() {
        return (
            <div>
                <img src={this.state.img} alt="Pic of Character"></img>
                <br />
                Name: {this.state.name}
            </div>
        );
    }
}

export default CharacterPage;
