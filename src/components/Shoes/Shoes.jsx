import React from 'react';

const Shoes = (props) => {

    return (
        <main>
            <section className="shoe-wrapper">
                {props.items.map(shoe => (
                    <h3>{shoe.style}</h3>
                ))}
            </section>
            <section className="cart-wrapper">
                <h3>Cart Total: $</h3>
            </section>
        </main>
    )
}

export default Shoes;