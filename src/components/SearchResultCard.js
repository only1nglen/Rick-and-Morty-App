import React from 'react'
import { Link } from 'react-router-dom'

function SearchResultCard (props) {
    // console.log(props, "from result card")

    const results = props.character.map(character => (
        <div className="result-card" key={character.id}>
            <Link to={`/characterbio/${character.id}`}>
                <img className="img-result" src={character.image} alt={character.name}></img>
            </Link> 
            <div>Name: {character.name}</div>
            <div>Status: {character.status}</div>
        </div>
    ))
    
    return (
        <div>
            {results}
        </div>
    )

}

export default SearchResultCard
