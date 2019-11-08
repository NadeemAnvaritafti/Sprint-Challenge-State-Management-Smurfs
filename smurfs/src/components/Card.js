import React from 'react';

const Card = props => {
    return (
        <div className='smurfCard'>
            <h2 className='smurfName'>{props.smurf.name}</h2>
            {console.log('name:', props.smurf.name)}
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Card;