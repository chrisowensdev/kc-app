import React from 'react';
import Logo from '../Logo';
import NavBar from '../NavBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <NavBar />
        </HeaderContainer>
    );
};

export default Header;
