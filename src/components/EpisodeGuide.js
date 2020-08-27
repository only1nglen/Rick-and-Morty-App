import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

import apiUrl from '../apiConfig'

class EpisodeGuide extends Component {
    constructor(){
        super()
        this.state = {
            totalPages:'',
            allEpisodes:[]
        }
    }

    async componentDidMount() {
        const getTotalPages = await axios.get(`${apiUrl}/episode`)
        const totalPages = getTotalPages.data.info.pages

        let pageNum = 0
        let allEpisodes = []
        do {
            pageNum++
            let episodeCall = await axios.get(`${apiUrl}/episode/?page=${pageNum}`)
            let episodeData = episodeCall.data.results
            allEpisodes.push(...episodeData)
        }
        while (pageNum < `${totalPages}`)

        this.setState ({
            allEpisodes,
            totalPages
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
