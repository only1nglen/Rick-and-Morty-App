import React from 'react'

function EpisodeCard(props){
    return(
        <div className="episode-card">
            <h2>{props.name}</h2>
            <small>{props.episode}</small>
            <div>Aired: {props.airdate}</div>
            <hr />
            <div className="cast-container">
                <div><h4>Cast</h4></div> 
                <div className="cast-box">{props.charList}</div>
            </div>
           
        </div>       
    )
}

export default EpisodeCard
