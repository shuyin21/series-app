import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoDetails } from '../features/logoSelector';
import { channelDetails } from '../features/channel';
const ChannelCard = ({ image, linkTo, value, channel }) => {

    const dispatch = useDispatch();

    const logoHandler = (e) => {
        e.preventDefault();
        dispatch(logoDetails(value));
        dispatch(channelDetails(channel));
        console.log('working');

    }


    return (
        <Container onClick={logoHandler} >

            <Content>



                <Link to={linkTo}>
                    <Image src={image} />
                </Link>



            </Content>
        </Container>);
};

const Container = styled.div`
   
    width:50%;
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
   
  border: 3px solid rgba(249, 249, 249, 0.1);
   display: flex;
align-items: center;
justify-content: center;
   border-radius: 25px;
   cursor: pointer;
   background-color: #000;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   &:hover{
       
       transform: scale(1.2);
       transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
       border-color: rgba(249, 249, 249, 0.8);
       @media screen and (max-width: 500px){
           transform: unset;
           border-color: #fff;

       }
   }
   @media screen and (max-width: 500px){
           
           border:1px solid #fff;

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
