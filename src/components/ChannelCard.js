import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ChannelCard = ({ image, linkTo }) => {



    return (
        <Container>

            <Content>



                <Link to={linkTo}>
                    <Image src={image} />
                </Link>



            </Content>
        </Container>);
};

const Container = styled.div`
    /* padding:0 0 10px; */
    width:100%;
    height:150px;
    
    margin:20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:1300px){
        margin:20px 0px;
        
    }
    `;

const Content = styled.div`
   width:90%;
   height:120px;
   border:1px solid white;
   display: flex;
align-items: center;
justify-content: center;
   border-radius: 25px;
   cursor: pointer;
   background-color: #000;
   &:hover{
       
       transform: scale(1.2);
       transition:0.5s ease-in-out;

       @media screen and (max-width: 500px){
           transform: unset;

       }
   }

    `;

const Wrap = styled.div`
width:100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

`;

const Image = styled.img`

width:50%;

`;

export default ChannelCard;
