import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Details = (props) => {



    const [showDetails, setShowDetails] = useState([]);
    const [seriesId, setSeriesId] = useState('');
    const [detailsClick, setDetailsClick] = useState('');

    let dId = 43687;



    const getDetails = async (query) => {
        const url = `https://api.tvmaze.com/shows/${query}`
        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { setShowDetails(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        console.log(showDetails);

    }
    console.log(detailsClick);

    if (detailsClick === true) {

        dId = props.seriesId;
        getDetails(dId);
        setDetailsClick(false);
    } else {
        console.log('not clicked');
    }
    // useEffect(() => {
    //     // handleFetch();
    //     dId = props.seriesId;
    //     getDetails(dId);
    // }, [props.isClicked])

    // const handleFetch = () => {

    //     getDetails(dId);
    // }




    return (
        <Wrapper>

            <h1>{showDetails.name}</h1>
            {/* <button onClick={handleFetch}>Click</button> */}

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