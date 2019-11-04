import React from 'react';

const Card = props => (
    <div className="card col-md-6" onClick={props.characterClick}>
        <div className="images">
            <img id={props.name} alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Card;