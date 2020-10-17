import React from 'react'

const Candle = (props) => {
    const { candle } = props;
    return (
        <div>
            <h1>{candle.title}</h1>
            <p>{candle.description}</p>
            <h2>Price: ${candle.price}</h2>
        </div>
    )
}

export default Candle
