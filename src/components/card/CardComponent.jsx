import React from 'react';
import './CardComponent.css'

export const Card = (props) => {
    console.log(props)
    return (
        <div className='cardcontainer'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2` } alt="monster"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
             
        </div>
    )
}