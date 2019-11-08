import React from 'react';

const Card = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            {console.log('name:', props.smurf.name)}
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Card;