import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    max-height: 60vh;
`;

const Image = styled.img`
    height: auto;
    width: auto;
    max-width: 60%;
`;
const Home = () => {
    return (
        <HomeContainer>
            <Image
                src={
                    'https://images.unsplash.com/photo-1593542468714-ac3ba4b38d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80'
                }
                alt='candle 1'
            />
        </HomeContainer>
    );
};

export default Home;
