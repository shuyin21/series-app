import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>

            <NavWrapper>
                <Logo>The Show Finder</Logo>
                <ul>
                    <li><LinkR to='login'>New Shows</LinkR></li>
                    <li><LinkR to='details'>Best Shows by Year</LinkR></li>
                    <li><LinkR to='/'>Find Actors</LinkR></li>
                </ul>
            </NavWrapper>
        </>


    );
};

export default Nav;


const NavWrapper = styled.div`
width: 100%;
height:50px;
display:flex;
padding:0;
margin:0;
justify-content:space-between;
background-color: #333;


ul{
    display:flex;
    width:20%;
    align-items:space-between;
    justify-content:space-between;
    margin-right:10%;
    li{
       
        list-style: none;
        color:#fff;
        cursor:pointer;
        font-weight: bold;

        
       
    }
}



`;

const Logo = styled.div`
height: 100%;
width:20%;
display:flex;
align-items:center;
justify-content:center;
font-size: 24px;
font-weight: bold;
color:#fff;
cursor:pointer;

`;

const LinkR = styled(Link)`
color:#fff;
text-decoration:none;
&:hover{
            color:red;
        }
`;