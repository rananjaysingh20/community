import React from 'react'
import logo from '../assets/main.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { GrAddCircle } from "react-icons/gr";
const Container = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    height: 5vh;
    padding: 5px;
    background-color: #cccccc;
    justify-content: space-between;
`
const Logo = styled.h1`
    padding: 5px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    
`
const Left = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 5%;
    transition: all 0.5s ease;
	&:hover {
		background-color: grey;
		color: white;
	}
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
    
`
const Title = styled.div`
    font-size: 12px;
    padding-left: 5px;
`

export default function navbar() {
    
    return (
        <Container>
            
            <Left>
                <Link to='/' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <Logo>codeBros</Logo>
                    <Image src={logo} alt='logo'/>            
                </Link>
            </Left>
            <Center>
                <GrAddCircle />
            </Center>
            <Right>
                <Link to='/account' style={{textDecoration: "none", color: "inherit", display:"flex"}}>
                    <VscAccount />
                    <Title>My Account</Title>
                </Link>
            </Right>
            
        </Container>
    )
}
