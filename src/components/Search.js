import React,  { useState }  from 'react'
import axios from 'axios'

import apiUrl from '../apiConfig'

function Search () {

    const [query, setQuery] = useState('')
    
    const [character, setCharacter] = useState([])
    
        const searchCharacters = async (e) => {
            e.preventDefault()
    
            const characterResponse = await axios.get(`${apiUrl}character/?name=${query}`)
            setCharacter(characterResponse.data.results)
            console.log(characterResponse.data)

            // try {
            //     const res = await fetch(`${apiUrl}character/?name=${query}`)
            //     const data = await res.json()
            //     setCharacter(data.results)
            // } catch(err){
            //     console.log(err)
            // }
        }

        return (
            <div>
                <form className="form" onSubmit={searchCharacters}>
                    <label className="search-label" htmlFor="query">Search by Name </label>
                    <input className="input" type="text" name="query" placeholder="enter name.." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}/>
                    <button className="search-button" type="submit">Search</button>
                </form>

                <div>
                    {character.map(character => (
                        <div className="result-card" key={character.id}>
                            <img className="img-result" src={character.image} alt={character.name}></img>
                            <div>Name: {character.name}</div>
                            <div>Status: {character.status}</div>
                        </div>
                    ))}
                </div>

            </div>
                
        )
    }

export default Search
