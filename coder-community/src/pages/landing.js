import React from 'react';
import styled from 'styled-components';
import Landing1 from '../assets/landing1.png';
import Landing2 from '../assets/landing2.jpg';
import Landing3 from '../assets/landing3.jpg';
import Landing4 from '../assets/landing4.jpg';
import { Link } from 'react-router-dom';

const ViewContainer = styled.div`
    height: 100vh;
    background-color: #101728;
    position: relative;
    z-index: 1;
`
const ViewContainerSecond = styled.div`
    height: 100vh;
    background-color: #101728;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const TextContainer = styled.div`
    z-index: 3;
    color: white;
    font-weight: 700;
    font-size: 65px;
    padding-top: 140px;
    padding-left: 100px;
    line-height: 1.04;
    width: 50vw;
`
const TextContainerCenter = styled.div`
    color: white;
    font-weight: 700;
    font-size: 65px;
    line-height: 1.04;
    width: 50vw;
    text-align: center;
`
const Logo = styled.div`
    color: white;
    font-size: 32px;
    font-weight: 500;
    padding-top: 160px;
    padding-left: 100px;
`
const Home = styled.button`
    margin-left: 100px; 
    font-size: 20px;
    position: relative;
    font-weight: 700;
    width: 150px;
    border: none;
    top: 160px;
    z-index: 4; 
    height: 50px;
    background: linear-gradient(to right, #ff3c5f, #9340ff);
    border-radius: 40px;
    cursor: pointer;
`
const LandingImage = styled.img`
    position:absolute;
    z-index: 2; 
    left: 1000px;
    height: 75vh;
`
const LandingImageSec = styled.img`
    position:absolute;
    z-index: 1; 
    left: 850px;
    mix-blend-mode: multiply;
    height: 75vh;
`
const FlipCard = styled.div`
    background-color: #101728;
    height: 400px;
    width: 400px;
    margin-top: 130px;
    margin-left: 100px;
    perspective: 1000px;
    border-radius: 16px;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
`
const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateY(180deg);
    }
`
const FlipCardFront = styled.div`
    position: absolute;
    background-image: linear-gradient(45deg, #6f04d9, #d9048e);
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
`
const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    background-image: linear-gradient(315deg, #6f04d9, #8a045c);
    color: #ffffff;
    transform: rotateY(180deg);
`
const FrontImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
`
const BackImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;  
    border-radius: 16px;
`

export default function Landing() {
  return (
    <div>
        <ViewContainer>
            <Logo>| codeBros</Logo>
            <div style={{display:"flex"}}>
                <TextContainer>Get in the <div style={{display:"inline-block",color:"#9340ff"}}>biggest</div> upcoming coders community</TextContainer>
                <LandingImage src={Landing1} alt="Landing1"/>
                <LandingImageSec src={Landing2} alt="Landing1"/>
            </div>
            <Link to='/home' style={{textDecoration: "none", color: "inherit"}}>
                <Home>Get In</Home>
            </Link>
        </ViewContainer>
        <ViewContainerSecond>
            <TextContainerCenter>
                <div style={{display:"inline-block",color:"#9340ff"}}>codeBros</div> is a community for coders all over India to connect.
                <div style={{padding:"20px"}}></div>
                <div style={{fontSize:"28px"}}>Our website is built for you to fid exciting content written by expert coders, masters in their own tech stacks, and you can contribute to by helping and writing awesome blogs.</div>    
            </TextContainerCenter>
        </ViewContainerSecond>
        <ViewContainer>
            <div style={{display:"flex"}}>
                <TextContainer><div style={{display:"inline-block",color:"#9340ff"}}>Connect with Experts</div>
                    <div style={{padding:"20px"}}></div>
                    <div style={{fontSize:"28px"}}>
                    Use codeBros to connect with experts you seek help from.
                    <div style={{padding:"20px"}}></div>
                    codeBros can also connect you to people outside your usual circle.
                    </div>
                </TextContainer>
                <FlipCard>
                    <FlipCardInner>
                        <FlipCardFront>
                            <FrontImg src={Landing3} alt="Landing3"/>
                        </FlipCardFront>
                        <FlipCardBack>
                            <BackImg src={Landing4} alt="Landing4"/>
                        </FlipCardBack>
                    </FlipCardInner>
                </FlipCard>
            </div>
        </ViewContainer>
    </div>
  )
}
