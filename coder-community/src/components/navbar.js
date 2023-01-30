import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { GrAddCircle } from "react-icons/gr";
import { IconContext } from "react-icons";

const Container = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    height: 4vh;
    padding: 5px;
    background-color: #cccccc;
    justify-content: space-between;
`
const Logo = styled.h1`
    padding: 5px;
    font-size: 2.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 5%;
    transition: all 0.5s ease;
`
const Center = styled.div`
    display: flex;  
    padding-left: 40px;
    padding-right: 40px;
    align-items: center;
`
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.div`
    font-size: 2vh;
    padding-left: 5px;
    padding-right: 5px;
    opacity: 0.7;
    transition: 0.1s ease-in;
    &:hover {
        opacity:1;
    }
`
const Division = styled.div`
    opacity: 0.5;
    padding: 0 5px 0 5px;
`

export default function navbar() {
    
    return (
        <Container>
            <Left>
                <Link to='/' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Logo>| codeBros</Logo>
                </Link>
            </Left>
            <Center>
                <Division> | </Division>
                <Link to='/stories' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Title>Top Stories</Title>
                </Link>
                <Division> | </Division>
                <Link to='/potd' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Title>POTD</Title>
                </Link>
                
                <Division> | </Division>
                <IconContext.Provider value={{ size: "1.5em", style: { verticalAlign: 'middle', opacity:'0.6' }}}>
                    <div>
                        <GrAddCircle />
                    </div>
                </IconContext.Provider>
                <Division> | </Division>
                <Link to='/blogs' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Title>Blogs</Title>
                </Link>
                <Division> | </Division>
                <Link to='/featured' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Title>Featured</Title>
                </Link>
                <Division> | </Division>
            </Center>
            <Right>
                <Link to='/account' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <IconContext.Provider value={{ size: "1.5em"}}>
                        <div>
                            <VscAccount />
                        </div>
                    </IconContext.Provider>
                </Link>
            </Right>
            
        </Container>
    )
}
