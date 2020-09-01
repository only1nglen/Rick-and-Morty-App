import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function SearchResultCard (props) {
    const results = props.character.map(character => (
        <div key={character.id}>
            <Card className="char-card" style={{ width: '14rem' }}>
            <Link to={`/characterbio/${character.id}`}>
                <Card.Img variant="top" src={character.image} />
            </Link>
                    <Card.Body>
                        <Card.Title className="search-result-title-card">{character.name}</Card.Title>
                    </Card.Body>
                </Card>
        </div>
    ))
    
    return (
        <div className='result-container'>
            {results}
        </div>
    )

}

export default SearchResultCard
