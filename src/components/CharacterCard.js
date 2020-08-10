import React from 'react'

function CharacterCard(props) {
    return (
        <div className="character-card">
            <img src={props.img} alt={props.name} />
            <div>Name: {props.name}</div>
            <div>Status: {props.status}</div>
            <div>Appeared in {props.epCount} {(props.epCount > 1) ? 'Episodes' : 'Episode'}</div>
            <hr />
            <div>Appeared in :<ul>{props.epList}</ul></div>
        </div>
    )
}

export default CharacterCard
