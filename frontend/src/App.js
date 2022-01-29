import React from 'react';
import Listings from './components/Listings';
import './App.css';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Listings />
            <Header />
        </div>
    );
}

export default App;
