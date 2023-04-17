import React from 'react';
import Shoe from '../Shoe/Shoe';
import './Shoes.css';

const Shoes = (props) => {

    return (
        <main>
            <div className="cart-wrapper">
                <h3>Cart Total: $</h3>
            </div>
            <section className="container">
                {props.items.map(shoe => (
                    <Shoe
                        style={shoe.style}
                        img={shoe.img}
                        price={shoe.price}
                    />
                ))}
            </section>
        </main>
    )
}

export default Shoes;