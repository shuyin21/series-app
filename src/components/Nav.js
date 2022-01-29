import React from 'react';
import styled from 'styled-components';


const Nav = () => {
    return (
        <>

            <NavWrapper>
                <ul>
                    <li>New</li>
                    <li>Year</li>
                    <li>Menu</li>
                </ul>
            </NavWrapper>
        </>


    );
};

export default Nav;


const NavWrapper = styled.div`
width: 100vw;
height:50px;
display:flex;
background-color: #333;

`;