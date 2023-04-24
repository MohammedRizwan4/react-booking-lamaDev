import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Main = styled.div`
    height: 70px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const NavbarItem = styled.div`

`

const Left = styled.div`
    padding-left: 50px;
    /* width: 200px; */
    flex:1;
`

const Logo = styled.div`
    width: 200px;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    padding: 10px;
`
const Middle = styled.div`
    display: flex;
    flex:2;
    justify-content: space-around;
`
const ListItem = styled.div`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex:1;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WrapperRight = styled.div`
    margin-left: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Item = styled.div`
    flex:1;
    padding: 10px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Main>
            <Wrapper>
                <Left>
                    <Logo>PACK & GO</Logo>
                </Left>
                <Middle>
                    <ListItem>HOME </ListItem>
                    <ListItem>ABOUT <ArrowDropDownIcon /></ListItem>
                    <ListItem>LISTING <ArrowDropDownIcon /></ListItem>
                    <ListItem>HOTEL <ArrowDropDownIcon /></ListItem>
                    <ListItem>PAGES <ArrowDropDownIcon /></ListItem>
                    <ListItem>CONTACT <ArrowDropDownIcon /></ListItem>
                </Middle>
                <Right>
                    <WrapperRight>
                        <Item>
                            <LocalMallOutlinedIcon style={{fontSize: "24px"}}/>
                        </Item>
                        <Item>
                            <Person2OutlinedIcon style={{fontSize: "26px"}}/>
                        </Item>
                    </WrapperRight>
                </Right>
            </Wrapper>
        </Main>
    );
}

export default Navbar;




