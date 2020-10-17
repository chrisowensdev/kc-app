import React, { useState, useEffect } from 'react';

const Listings = props => {
    const [state, setState] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://127.0.0.1:3333/listings`);
            const listingData = await response.json();
            setState(listingData.results);
        })();
    }, [setState]);

    return (
        <>
        <ul>

        
        {state.map(listing => {
            return ( 
                <li key={listing.id}>
                    {listing.title}
                    </li>
                
                
            )
        })}
        </ul>

        </>
    )
}

export default Listings;