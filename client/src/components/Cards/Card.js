import React from 'react';
import './Card.css';


const Card = props => (
    <div onClick={props.characterClick}>
        <div className="image-group">
            <img id={props.name} alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Card;