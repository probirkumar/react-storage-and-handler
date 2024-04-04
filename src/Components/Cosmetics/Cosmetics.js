import React, { useEffect, useState } from 'react';
// import { add } from '../../Utilits/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../Utilits/Calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] =useState([])

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    })

    return (
        <div>
            <h1>Welcome to my Cosmetics Store.</h1>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    name={cosmetic.name}
                    id={cosmetic.id}
                    price={cosmetic.price}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;