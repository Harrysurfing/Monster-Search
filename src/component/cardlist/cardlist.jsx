import React from 'react';
import './cardlist.style.css';

import {Card} from '../card/card';

export const Cardlist = (props)=> (
    
    <div className="cardlist">
    {props.monsters.map(monster=>(
        <Card key = {monster.id} monster={monster}/>
    ))}
    </div>

);