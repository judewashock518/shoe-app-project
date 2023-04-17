import React from 'react';
import './Shoe.css';

const Shoe = (props) => {

    return(
        <div className= "wrapper">
            <h3>{props.style}</h3>
            <p>${props.price}</p>
            <img src={props.img} alt={props.style} />
            <button>Add To Cart</button>
        </div>
    )
}

export default Shoe;