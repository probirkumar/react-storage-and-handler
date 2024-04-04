import React from 'react';

const Cosmetic = (props) => {
    // console.log(props);
    const {id, name, price} = props.cosmetic;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Id: {id}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Cosmetic;