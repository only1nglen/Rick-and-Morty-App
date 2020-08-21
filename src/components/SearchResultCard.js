import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function SearchResultCard (props) {
    // console.log(props, "from result card")

    const results = props.character.map(character => (
        <div key={character.id}>
            <Card className="char-card" style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Button variant="outline-success">
                            <Link to={`/characterbio/${character.id}`}>More Info</Link>
                        </Button>
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
