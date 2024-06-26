import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb} from '../../Utilits/Fakedb';

const Cosmetic = (props) => {
    // console.log(props);
    const { id, name, price } = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id);
    }

    const removeFromCart = id =>{
        removeFromDb(id);
    }

    // const addToCartWithParam = () => addToCart(id);

    return (
        <div className='projuct'>
            <h1>Name: {name}</h1>
            <p>Id: {id}</p>
            <p>Price: ${price}</p>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove Cart</button>
        </div>
    );
};

export default Cosmetic;