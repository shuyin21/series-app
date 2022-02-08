import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';

const SidePanel = (props) => {
    return (


        <Main>
            <h1>{props.title}</h1>
            <SmallCard image={props.image1} />
            <SmallCard image={props.image2} />
        </Main>
    );
};

export default SidePanel;


const Main = styled.div`
width:20vw;
height:700px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;


padding-top:20px;

border:1px solid white;
@media screen and (max-width:1000px){
    display:none;
}

`;