import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: grey;
    }

    li {
        margin: 20px;
    }
`;

const NavBar = () => {
    const [categories, setCategories] = useState([
        'candles',
        'wax melts',
        'seasonal',
        'special occasion',
        'other',
        'sale',
        'contact',
    ]);
    return (
        <div>
            <NavBarList>
                {categories.map((cat) => {
                    return (
                        <li key={cat}>
                            <Link to='/listings'>{cat}</Link>
                        </li>
                    );
                })}
            </NavBarList>
        </div>
    );
};

export default NavBar;
