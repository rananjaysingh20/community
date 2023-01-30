import React from 'react'
import Navbar from '../components/navbar.js';
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
    
`
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export default function home() {
  return (
    <div>
        <Navbar/>
        <Cards>
          <Card>Hello</Card>
          <Card>Hello</Card>
          <Card>Hello</Card>
        </Cards>
    </div>
  )
}
