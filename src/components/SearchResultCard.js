import React from 'react'
import { Link } from 'react-router-dom'

function SearchResultCard (props) {
    console.log(props, "from result card")
    return (
        <div>
        {props.character.map(character => (
            <div className="result-card" key={character.id}>
                <Link to={`/characterbio/${props.character.id}`}>
                    <img className="img-result" src={props.image} alt={props.name}></img>
                </Link> 
                <div>Name: {props.name}</div>
                <div>Status: {props.status}</div>
            </div>
        ))}
    </div>
    )

}

export default SearchResultCard
