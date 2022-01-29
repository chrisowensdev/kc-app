import React from 'react';
import styled from 'styled-components';

const NavBarList = styled.ul`
    display: flex;
    width: 100%;
    list-style-type: none;
    justify-content: space-between;
    text-transform: uppercase;
    max-width: 1000px;
    align-self: center;
    padding: 0;
    margin: 10px auto;

    li {
        padding: 20px;
    }
`;

const NavBar = () => {
    return (
        <div>
            <NavBarList>
                <li>Candles</li>
                <li>Wax Melts</li>
                <li>Seasonal</li>
                <li>Special Occasion</li>
                <li>Other</li>
                <li>Sale</li>
                <li>Contact</li>
            </NavBarList>
        </div>
    );
};

export default NavBar;
