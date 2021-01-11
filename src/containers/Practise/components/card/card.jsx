import React from 'react';
import './card.css';

export const Card = (props) => {
    return <div className='card'>
        <h3> {props.monsters.name} </h3>
        <p> {props.monsters.email}</p>
    </div>;
}

