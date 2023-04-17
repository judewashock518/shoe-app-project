import React from 'react';
import './Shoe.css';

const Shoe = (props) => {

    return(
        <div className= "wrapper">
            <img src={props.img} alt={props.style} />
            <h3>{props.style}</h3>
            <p>${props.price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Shoe;