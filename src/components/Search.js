import React,  { Component }  from 'react'
import axios from 'axios'
// import { Redirect, Link } from 'react-router-dom'

import apiUrl from '../apiConfig'
import SearchForm from './SearchForm'
import SearchResultCard from './SearchResultCard'

class SearchBar extends Component {
        constructor() {
            super()
            this.state = {
                searched: {
                    query: null
                },
                    character:[],
                    gotNoResults: false
            }
        }

        onChange = event => {
            const updatedField = { [event.target.name]: event.target.value }
            const searchInput = Object.assign(this.state.searched, updatedField)
            this.setState({ searched: searchInput })
        }

        onSubmit = async event => {
            event.preventDefault()

            try {
                const getTotalPages = await axios.get(`${apiUrl}/character/?name=${this.state.searched.query}`)
                const totalPages = getTotalPages.data.info.pages

                let pageNum = 0
                let character = []

                while (this.state.searched.query && pageNum < `${totalPages}`) {
                    pageNum++
                    const charResponse = await axios.get(`${apiUrl}character/?page=${pageNum}&name=${this.state.searched.query}`)
                    character.push(...charResponse.data.results)
                        this.setState({
                        character,
                        info: charResponse.data.info,
                        gotNoResults: false
                    })
                }
            } catch {
                    this.setState ({
                        gotNoResults: true,
                        character:[]
                    })
            }
        }

        render() {

            const { character, searched } = this.state
            const { onChange, onSubmit } = this

            return (
            <div>
                <div>
                    <SearchForm
                    character={character}
                    searched={searched}
                    gotNoResults={this.state.gotNoResults}
                    onChange={onChange}
                    onSubmit={onSubmit} />
                </div>

                <SearchResultCard character={character} />

            </div>
            )
        }
}

export default SearchBar
