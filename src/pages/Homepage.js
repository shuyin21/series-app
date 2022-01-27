import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Details from '../components/DetailsComponent';
import ShowCard from '../components/ShowCard';

const Homepage = () => {


    const [seriesId, setSeriesId] = useState('game');
    const [search, setSearch] = useState('');

    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState([]);



    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`
        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

        // console.log(show);

    }






    const handleSearch = (e) => {
        e.preventDefault();

        getSeries(search);
        setSearch('');
    }
    useEffect(() => {
        getSeries();

    }, [])


    console.log(isClicked);


    return (
        <Home>
            <h1>The Series Finder</h1>
            <Form onSubmit={handleSearch}>
                <input type='search' value={search}
                    placeholder='search for the show'
                    required
                    onChange={e => setSearch(e.target.value)}
                />
            </Form>
            <HomeWrapper>
                {show.map(series => (
                    <ShowCard isClicked={isClicked} key={series.show.id} clicked={isClicked => { setIsClicked(isClicked) }} getId={seriesId => setSeriesId(seriesId)} show={series} />

                ))}

            </HomeWrapper>
            <Details seriesId={seriesId} isClicked={isClicked} />
        </Home>
    );
};

export default Homepage;

const Home = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const HomeWrapper = styled.div`
width:100vw;
display: flex;
justify-content: center;
flex-wrap: wrap;


`;

const Form = styled.form`


input{
    text-align: center;
}

`;