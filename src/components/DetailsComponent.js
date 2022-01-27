import React, { useState } from 'react';

import styled from 'styled-components';

const Details = (props) => {

    console.log();

    const [showDetails, setShowDetails] = useState([]);


    const dId = props.seriesId;


    const getDetails = async (query) => {
        const url = `https://api.tvmaze.com/shows/${query}`
        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setShowDetails(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        console.log(showDetails);

    }


    const handleFetch = (e) => {
        e.preventDefault();
        getDetails(dId);
    }

    return (
        <Wrapper>

            <h1>{showDetails.name}</h1>
            <button onClick={handleFetch}>Click</button>

        </Wrapper>





    );
};

export default Details;


const Wrapper = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;

`;