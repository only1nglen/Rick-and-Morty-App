import React from 'react'

function EpisodeCard(props){
    return(
        <div className="episode-card">
            <div>Name: {props.name}</div>
            <div>{props.episode}</div>
            <div>Air Date: {props.airdate}</div>
            <div>Character Appearances: <ul>{props.charList}</ul></div>
        </div>       
    )
}

export default EpisodeCard
