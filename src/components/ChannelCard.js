import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ChannelCard = ({ image }) => {



    return (
        <Container>

            <Content>

                <Wrap >

                    <Link to=''>
                        <img src={image} />
                    </Link>
                </Wrap>


            </Content>
        </Container>);
};

const Container = styled.div`
    padding: 0 0 50px;
    width:30%;
    height:150px;
    
    margin:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Content = styled.div`
   width:90%;
   height:120px;
   border:1px solid white;
   border-radius: 25px;
   cursor: pointer;
   &:hover{
       width:100%;
       height:150px;
   }

    `;

const Wrap = styled.div`


`;

export default ChannelCard;
