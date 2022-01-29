import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Candle from './components/Candle';
import Listings from './components/Listings';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/listings'>
                        <Listings />
                    </Route>
                    <Route path='/candles'>
                        <Candle />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
