import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findId } from '../features/idFinder';
import { showDetails } from '../features/showDetails';

const ShowCard = ({ show }) => {

    const dispatch = useDispatch();




    const handleIdFind = () => {
        dispatch(findId(show.show.id));
        dispatch(showDetails(true));

    }


    return (

        <CardWrapper  >
            <Linker to='details' onClick={handleIdFind} />
            <ImageWrapper>
                {

                    show.show.image ?
                        <ImageHolder src={show.show.image.medium} /> :
                        <ImageHolder src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
                }

            </ImageWrapper>
            <InfoWrapper>
                <TitleWrapper>
                    <h3 id='title'>{show.show.name}</h3>
                </TitleWrapper>
                <RelaseDateWrapper>
                    <p id='premiere-year'>{show.show.premiered}</p>
                </RelaseDateWrapper>


            </InfoWrapper>

        </CardWrapper>
    )
}


    ;

export default ShowCard;


const CardWrapper = styled.div`
margin:20px;
width:200px;

display:flex;
justify-content:space-between;
flex-direction:column;

@media screen and (max-width: 768px){
    width:400px;
   
}
`;

const Linker = styled(Link)`
width:200px;
height:350px;
position:absolute;

@media screen and (max-width: 768px){
    width:400px;
}
`;
const ImageWrapper = styled.div`


`;


const ImageHolder = styled.img`
                        display: block;
						width: 100%;
						height: 350px;
						object-fit: cover;
						border-radius: 16px;
						box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
						transition: 0.4s;
                        cursor: pointer;

                        @media screen and (max-width: 768px){
    height:400px;
}

&:hover{
                        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
							transform: scale(1.05);
}
`;

const InfoWrapper = styled.div`
height:100px;
width:100%;
display:flex;
margin-top:10px;
flex-direction:column;
justify-content:center;

text-align:center;






`;

const TitleWrapper = styled.div`

height:40px;
margin-bottom:10px;

h3{
    color:red;
    font-size: 18px;
}
`;
const RelaseDateWrapper = styled.div`

margin-top: 20px;

p{
    color:green;
}
`;