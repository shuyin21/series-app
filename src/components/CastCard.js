import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CastCard = ({ actor }) => {
    return (

        <CastWrapper>
            <ActorLink to='details' />

            {actor.person.image ? <Image src={actor.person.image.medium} />
                : <Image src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
            }
            <NameWrapper><Name>{actor.person.name}</Name></NameWrapper>

            <NameWrapper><Character>{actor.character.name}</Character></NameWrapper>

        </CastWrapper>


    );
};

export default CastCard;


const CastWrapper = styled.div`
max-height:300px;
max-width: 150px;
display:flex;
flex-direction:column;
margin:10px 15px;
align-items:center;

p{
    color:#fff;
}
`;

const ActorLink = styled(Link)`
height:200px;
width:150px;
position:absolute;


`;

const Image = styled.img`
height:200px;
width:150px;

`;
const NameWrapper = styled.div`
width:100%;
height:50px;
text-align:center;


`;


const Name = styled.h3`
font-weight:bold;
color:#fff;

`;

const Character = styled.h4`
color:red;
font-size:12px;
`;