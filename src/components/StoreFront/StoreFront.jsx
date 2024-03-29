import React, { useState } from 'react';
import inventoryData from '../../inventory';
import Shoes from '../Shoes/Shoes';

const StoreFront = () => {
    const [ inventory, setInventory] = useState(inventoryData);

    console.log(inventory);

    return(
        <div className="storefront-wrapper">
            <h1>New Releases</h1>
            <Shoes items={inventory}/>
        </div>
    )
}

export default StoreFront;