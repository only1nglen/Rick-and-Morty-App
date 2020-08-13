import React,  { Component }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from '../apiConfig'
import SearchForm from './SearchForm'
// import SearchResultCard from './SearchResultCard'


class SearchBar extends Component {
        constructor() {
            super()
            this.state = {
                searched: {
                    query: ''
                },
                    character:[],
                    info:[]
            }
        }

        onChange = event => {
            const updatedField = { [event.target.name]: event.target.value }

            const searchInput = Object.assign(this.state.searched, updatedField)
        
            this.setState({ search: searchInput })
        }

        onSubmit = async event => {
            event.preventDefault()

            const characterResponse = await axios.get(`${apiUrl}character/?page=1&name=${this.state.searched.query}`)
            // console.log(characterResponse.data)

            this.setState ({
                character: characterResponse.data.results,
                info: characterResponse.data.info
            })
        }

        render() {
            return (
            <div>
                <SearchForm  
                    character={this.state.character}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit} 
                />

                {/* <div>
                    <div style={{display: !this.state.info.count && "none"}}>{this.state.info.count} Results</div>
                    <div style={{display: !this.state.info.count && "none"}}>{this.state.info.pages} Pages</div>
                    <div style={{display: !this.state.info.count && "none"}}>{this.state.info.next}</div>
                    <div style={{display: !this.state.info.count && "none"}}>{this.state.info.prev}</div>
                </div> */}

                {/* <SearchResultCard  

                /> */}

                <div>
                    {this.state.character.map(character => (
                        <div className="result-card" key={character.id}>
                            <Link to={`/characterbio/${character.id}`}>
                                <img className="img-result" src={character.image} alt={character.name}></img>
                            </Link> 
                            <div>Name: {character.name}</div>
                            <div>Status: {character.status}</div>
                        </div>
                    ))}
                </div>

            </div>
                
            )
        }
        
}

export default SearchBar

// import React,  { useState }  from 'react'
// import axios from 'axios'
// import { Link, Redirect } from 'react-router-dom'

// import apiUrl from '../apiConfig'

// function Search () {

//     const [query, setQuery] = useState('')
    
//     const [character, setCharacter] = useState([])

//     const [info, setInfo] = useState([])
    
//         const onSubmit = async event => {
//             event.preventDefault()
//             console.log(event)
    
//             const characterResponse = await axios.get(`${apiUrl}character/?page=1&name=${query}`)
//             // console.log(characterResponse.data.info)

//             const nextStr = characterResponse.data.info.next

//             const getNextNum = function(next) {
//                 if (next) {
//                     return nextStr.substring(48, 49)
//                 } else {
//                     return null
//                 }
//             }
//             const nextPageNum = getNextNum(nextStr)
//             console.log(nextPageNum)

//             const prevStr = characterResponse.data.info.prev
//             const getPrevNum = function(prev) {
//                 if (prev) {
//                     return prevStr.substring(48, 49)
//                 } else {
//                     return null
//                 }
//             }
//             const prevPageNum = getPrevNum(prevStr)
//             console.log(prevPageNum)

//             setInfo(characterResponse.data.info)
//             setCharacter(characterResponse.data.results)

//             // try {
//             //     const res = await fetch(`${apiUrl}character/?name=${query}`)
//             //     const data = await res.json()
//             //     setCharacter(data.results)
//             // } catch(err){
//             //     console.log(err)
//             // }

//             console.log(setCharacter, "setCH")

//             const newSearchPage = function () {
//                     if (setCharacter) {
//                         return <Redirect to={`/searchresult/1`} />
//             }
//                 }
//                 newSearchPage()
//             }
                

//         const onChange = event => setQuery(event.target.value)

//         return (
           
        

//             <div>
//                 <form className="form" onSubmit={onSubmit}>
//                     <label className="search-label" htmlFor="query">Search by Name </label>
//                     <input className="input" type="text" name="query" placeholder="enter name.." 
//                         value={query}
//                         onChange={onChange}/>
//                     <button className="search-button" type="submit">Search</button>
//                 </form>

//                 <div>
//                     <div style={{display: !info.count && "none"}}>{info.count} Results</div>
//                     <div style={{display: !info.count && "none"}}>{info.pages} Pages</div>
//                     <div style={{display: !info.count && "none"}}>{info.next}</div>
//                     <div style={{display: !info.count && "none"}}>{info.prev}</div>
//                 </div>

//                 <div>
//                     {character.map(character => (
//                         <div className="result-card" key={character.id}>
//                             <Link to={`/characterbio/${character.id}`}>
//                                 <img className="img-result" src={character.image} alt={character.name}></img>
//                             </Link> 
//                             <div>Name: {character.name}</div>
//                             <div>Status: {character.status}</div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
                
//         )
//     }

// export default Search
