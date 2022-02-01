import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showDetails } from '../features/showDetails';
import { FaWindowClose } from 'react-icons/fa';

const Details = (props) => {


    const dispatch = useDispatch();
    const showId = useSelector((state) => state.findId.value);


    const [details, setDetails] = useState([]);






    const getDetails = async (query) => {
        const url = `https://api.tvmaze.com/shows/${query}`
        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { setDetails(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        // console.log(details);

    }

    useEffect(() => {
        getDetails(showId);
        console.log(details);
    }, [showId])

    // getDetails(showId);


    const handleDetailClose = () => {
        dispatch(showDetails(false));
    }
    return (
        <Wrapper>
            {details.image ? <Image src={details.image.original} />
                : <Image src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />}


            <DetailsWrapper>
                <CloseButton to='/' onClick={handleDetailClose}><CloseBtn /></CloseButton>
                <h1>{details.name}</h1>
                <Detail>
                    <Wrap><h3>Genre: </h3><p> {details.genres}</p></Wrap>
                    <Wrap><h3>Language: </h3><p> {details.language}</p></Wrap>
                    <Wrap><h3>Premiered: </h3><p> {details.premiered}</p></Wrap>
                    {details.summary}

                </Detail>
            </DetailsWrapper>
            {/* <button onClick={handleFetch}>Click</button> */}

        </Wrapper>





    );
};

export default Details;


const Wrapper = styled.div`
width:100vw;
height:100%;
margin-top:100px;
display:flex;
padding:0 5%;
justify-content: space-between;


`;

const Image = styled.img`
width:50vw;
height:80vh;

`;

const DetailsWrapper = styled.div`

width:40%;
margin-left:50px;
h1{
    text-align: center;
}
`;

const CloseButton = styled(Link)`
display: flex;
align-items: flex-end;
justify-content: flex-end;

`;

const CloseBtn = styled(FaWindowClose)`
color:#000;
width:40px;
height:30px;

`;

const Detail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:50px;





`;

const Wrap = styled.div`
display:flex;
width:100%;

align-items: center;
justify-content:space-between;

h3{
    color:red;

}



`;