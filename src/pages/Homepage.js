import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShowCard from '../components/ShowCard';

const Homepage = () => {


    const [series, setSeries] = useState('game');
    const [search, setSearch] = useState('');

    const [show, setShow] = useState([]);



    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`
        await fetch(url)
            .then(resp => resp.json())
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        console.log(show);

    }


    const handleSearch = (e) => {
        e.preventDefault();

        getSeries(search);
        setSearch('');
    }
    useEffect(() => {
        getSeries();

    }, [])




    return (
        <Home>
            <h1>The Series Finder</h1>
            <form onSubmit={handleSearch}>
                <input type='search' value={search}
                    placeholder='search for the show'
                    required
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <HomeWrapper>

                {show.map(series => (
                    <ShowCard key={series.show.id} show={series} />

                ))}





            </HomeWrapper>
        </Home>
    );
};

export default Homepage;

const Home = styled.div`
display: flex;
flex-direction: column;


`;

const HomeWrapper = styled.div`
width:100vw;
display: flex;

flex-wrap: wrap;


`;