import React from 'react';
import logo from '../../assets/logo_white.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: 100px;
`;

const Logo = () => {
    return (
        <>
            <LogoImage src={logo} />
        </>
    );
};

export default Logo;
