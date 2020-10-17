import React, { Component } from 'react';
import Candle from './Candle';

import candles from '../data/appData';

class CandleList extends Component {
    state = {
        candles: []
    }

    componentDidMount() {
        const { candles } = this.state;
        this.setState({
            candles: candles
        })
    }

    render() {
        return(
            <>
                {candles.map(candle => (
                    <Candle candle={candle} key={candle.id} />
                ))}
            </>
        )
    }


}

export default CandleList

