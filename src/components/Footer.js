import React from 'react';
import styled from 'styled-components';

const Footer = () => {



    return (
        <>
            <FooterDiv>

                <h3>©{(new Date().getFullYear())} SERIES FINDER APP</h3>


            </FooterDiv>
        </>
    )
}

export default Footer



const FooterDiv = styled.div`
width: 100vw;
position: absolute;
bottom:0;
height:100px;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color:#fff;
h3{
    font-weight: 100;
    font-size: 18px;
}
`;