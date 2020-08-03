import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from './../apiConfig'

class EpisodeListing extends Component {
    constructor(){
        super()
        this.state = {
            listing: [],
            listing1:[],
            next:"",
            prev:""
        }
    }

    componentDidMount() {
        axios.all([ 
            axios.get(`${apiUrl}/episode/?page=1`),
            axios.get(`${apiUrl}/episode/?page=2`)
        ])
        // .then(res => console.log(res[0].data))
        // .then(match => console.log(this.props))
        .then(res => 
            this.setState ({
            listing: res[0].data.results,
            listing1: res[1].data.results
            // next: res.data.info.next,
            // prev: res.data.info.prev
        }))
        .catch(console.error)
    }

    render(){
        const { listing, listing1 } = this.state

        // const episodePageControl = (
        //     <div>
        //         <Link to={ { search:`/episode/?page=2`} }>{next}</Link>
        //     </div>
        // )

        const allEps = listing.concat(listing1)

        const eplist = allEps.map(ep => (
            <div key={ep.id}>
                <Link to={`/episode/${ep.id}`}>{ep.name}</Link>
            </div>
        ))

        return(
            <div>
                {/* {episodePageControl} */}
                <br />
                {eplist}
            </div>
    )}
}

export default EpisodeListing
