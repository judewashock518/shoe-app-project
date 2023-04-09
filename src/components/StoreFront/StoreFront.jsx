import React, { useState } from 'react';
import inventoryData from '../../inventory';

const StoreFront = () => {
    const [ inventory, setInventory] = useState(inventoryData);

    console.log(inventory);

    return(
        <div className="storefront-wrapper">
            <h1>New Releases</h1>
        </div>
    )
}

export default StoreFront;