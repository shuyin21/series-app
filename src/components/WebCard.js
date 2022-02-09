import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const WebCard = (props) => {




    console.log(props.show);

    return (

        <Main>
            <Wrapper>

                <Linker to='detail'>
                    <Title>
                        <h3>{props.showName}</h3>
                    </Title>
                    {

                        props.img ?
                            <Image src={props.img.medium} /> :
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
                    }

                </Linker>
            </Wrapper>

        </Main>

    );
};

export default WebCard;


const Main = styled.div`
width:200px;
height:300px;
display: flex;
/* border:1px solid white; */
border-radius: 15px;
margin:10px;

&:hover{
    transform:scale(1.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}

`;


const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
border-radius: 15px;
overflow: hidden;
`;

const Image = styled.img`
width:100%;
height:90%;


`;

const Linker = styled(Link)`

width:200px;
height:300px;



`;
const Title = styled.div`
width:100%;
height:40px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
border-radius: 15px;
h3{
   
    color:#fff;
}
`;