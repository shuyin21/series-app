import React from 'react';
import styled from 'styled-components';

const SmallCard = ({ image }) => {



    return (



        <Main>

            <Image src={image} />

        </Main>



    );
};

export default SmallCard;


const Main = styled.div`
width:60%;
height:40%;


`;

const Image = styled.img`
width:100%;
height:100%;

`;