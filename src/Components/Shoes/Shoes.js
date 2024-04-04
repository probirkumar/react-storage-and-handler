import React from 'react';
import { add, multifly, subtraction } from '../../Utilits/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multifly(first, second);
    const sum = add(first, second);
    const sub = subtraction(first, second);
    return (
        <div>
            <h2>This is my Shoe Storage</h2>
            <p>Result: {result} and Sum: {sum} and Sub: {sub}</p>
        </div>
    );
};

export default Shoes;