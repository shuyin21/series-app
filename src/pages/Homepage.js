import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Homepage = () => {


    const [series, setSeries] = useState('game');

    const [show, setShow] = useState([]);

    const url = `https://api.tvmaze.com/search/shows?q=${series}`

    const getSeries = async () => {

        await fetch(url)
            .then(resp => resp.json())
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        console.log(show);

    }
    useEffect(() => {
        getSeries();

    }, [])


    return (
        <>







        </>);
};

export default Homepage;
