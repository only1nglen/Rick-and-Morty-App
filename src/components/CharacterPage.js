import React from 'react';
import axios from 'axios'

import apiUrl from '../apiConfig'

class CharacterPage extends React.Component {
    constructor() {
        super()

        this.state = {
            name:""
        }
    }

    componentDidMount() {
        axios({
            url: `${apiUrl}/character/${this.props.match.params.id}`,
            method: 'get'
        })
        // .then(res => console.log(res.data))
        .then(res => 
            this.setState ({
            name: res.data.character.name,
        }))
        .catch(console.error)
    }

    
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

export default CharacterPage;
