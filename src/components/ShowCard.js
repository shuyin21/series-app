import React from 'react';
import styled from 'styled-components';

const ShowCard = ({ show }) => {
    return (

        <CardWrapper>
            <ImageWrapper bcgImage={show.show.medium} />
            <InfoWrapper>
                <h3 id='title'>{show.show.name}</h3>
                <p id='premiere-year'>{show.show.premiered}</p>

            </InfoWrapper>

        </CardWrapper>
    )

};

export default ShowCard;


const CardWrapper = styled.div`
width:15%;
height:300px;
display:flex;
flex-direction:column;
`;

const ImageWrapper = styled.div`
width:100%;
height:80%;
background-image:url(${props => props.bcgImage});
object-fit:cover;
background-size:cover;
`;

const InfoWrapper = styled.div`
height:50px;
width:100%;



h3{
    color:red;
    
}


p{
    color:green;
}
`;

