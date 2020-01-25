import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className='Card' onClick={props.showInfo}>
            <img src={props.image} alt={props.alt}/>
            <p className='card-text'>{props.name}</p>
        </div>
    );
};

export default Card;