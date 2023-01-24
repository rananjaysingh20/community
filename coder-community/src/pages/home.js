import React from 'react'
import Navbar from '../components/navbar.js';
import styled from 'styled-components';

const Container1 = styled.div`
    background-color: teal;
    height 100vh;
`
const Container2 = styled.div`
    background-color: blue;
    height 100vh;
`
export default function home() {
  return (
    <div>
        <Navbar/>
        <Container1></Container1>
        <Container2></Container2>
    </div>
  )
}
