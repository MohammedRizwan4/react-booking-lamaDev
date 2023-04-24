import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
`

const Main = styled.div`
    position: relative;
`

const BigText = styled.h1`
    position: absolute;
    top: 160px;
    margin:0 auto;
    color: black;
    font-size: 40px;
    width: 100%;
`

const SmallText = styled.h3`
    position: absolute;
    top: 210px;
    margin:0 auto;
    color: black;
    font-weight: 700;
    width: 100%;
`
const Search = () => {
    return (
        <Main>
            <Wrapper src="https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <BigText>Find your next destination</BigText>
            <SmallText>Get the best prices on 2,000,000+ properties, worldwide</SmallText>
        </Main>
    );
}

export default Search;
