import React from 'react';
import './CardList.css';
import {Card} from '../card/CardComponent'

export const CardList = (props) => {
    return (
        <div className='cardlist'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
                ))
            }
        </div>
    )
}