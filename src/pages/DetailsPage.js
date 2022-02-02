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
        const url = `https://api.tvmaze.com/shows/${query}`;

        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { setDetails(data); }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



    }

    useEffect(() => {
        getDetails(showId);
        console.log(details);
    }, [showId])



    const handleDetailClose = () => {
        dispatch(showDetails(false));
    }
    console.log(details);
    return (
        <DetailMain>
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


                        <SummaryDiv dangerouslySetInnerHTML={{ __html: details.summary }} />

                    </Detail>
                </DetailsWrapper>
                {/* <button onClick={handleFetch}>Click</button> */}

            </Wrapper>
        </DetailMain>




    );
};

export default Details;


const DetailMain = styled.div`
width:100%;
height:900px;

display:flex;
padding:0 10%;
justify-content: space-between;
background-color: #000;

`;

const Wrapper = styled.div`
width:100vw;

margin-top:50px;
display:flex;
padding:0 10%;
justify-content: space-between;
background-color: #000;


`;

const Image = styled.img`
width:30vw;
height:80vh;

`;

const DetailsWrapper = styled.div`

width:40%;


background-color: #000;
color: #fff;
h1{
    margin-top:50px;
    text-align: center;
}
`;

const CloseButton = styled(Link)`
display: flex;
align-items: flex-end;
justify-content: flex-end;

`;

const CloseBtn = styled(FaWindowClose)`
color:#fff;
width:40px;
height:30px;

`;

const Detail = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:100px;





`;

const Wrap = styled.div`
display:flex;
width:100%;

align-items: center;
justify-content:space-between;

h3{
    color:red;

}
font-weight:bold;


`;

const SummaryDiv = styled.div`
margin-top:50px;


`;