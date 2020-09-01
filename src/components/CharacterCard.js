import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

function CharacterCard(props) {
    return (
        <div className="char-bio-page">
            <Card className="char-card" style={{ width: '16rem' }}>
                <Card.Img variant="top" src={props.character.image} />
                <Card.Body>
                    <Card.Title className="char-card-name">{props.character.name}</Card.Title>
                    <div><span className="character-card-label">Gender</span>: {props.character.gender}</div>
                    <div><span className="character-card-label">Status</span>: {props.character.status}</div>
                    <div><span className="character-card-label">Location</span>: {props.character.location.name}</div>
                </Card.Body>
            </Card>

            <Accordion>
                <Card className="episode-accordion">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="ep-appearance-list-title">{props.epCount} Episode Appearances</div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body variant="dark">
                            <Table striped bordered hover 
                                    size="sm" 
                                    variant="dark">
                                    <tbody>
                                        {props.epList}
                                    </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default CharacterCard
