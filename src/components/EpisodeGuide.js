import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

import apiUrl from '../apiConfig'

class EpisodeGuide extends Component {
    constructor(){
        super()
        this.state = {
            allEpisodes:[]
        }
    }

   async componentDidMount() {
        const [episodeResponsePageOne, episodeResponsePageTwo, episodeResponsePageThree] = await axios.all([ 
            axios.get(`${apiUrl}/episode/?page=1`),
            axios.get(`${apiUrl}/episode/?page=2`),
            axios.get(`${apiUrl}/episode/?page=3`)
        ])
        const episodePageOne = episodeResponsePageOne.data.results
        // console.log(episodePageOne)
        const episodePageTwo = episodeResponsePageTwo.data.results
        // console.log(episodePageTwo)
        const episodePageThree = episodeResponsePageThree.data.results
        // console.log(episodePageThree)
        const allEpisodes = [...episodePageOne, ...episodePageTwo, ...episodePageThree]
        // console.log(allEpisodes)
        this.setState ({
            allEpisodes
        })
    }

    render(){
        const { allEpisodes } = this.state

        const episodeList = allEpisodes.map(episode => (
            <tr key={episode.id}>
                <td>{episode.id}</td>
                <td>
                    <Link to={`/episode/${episode.id}`}>
                        {episode.name}
                    </Link>
                </td>
            </tr>
        ))

        return(
            <div className="table-container">
                <Table striped bordered hover 
                        size="sm" 
                        variant="dark"
                        className="episode-table" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><h5>Title</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodeList}
                    </tbody>
                </Table>
            </div>
    )}
}

export default EpisodeGuide
