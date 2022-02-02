import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ShowCard from '../components/ShowCard';
import { useSelector, useDispatch } from 'react-redux';
import { findShow } from '../features/showFinder';
import { showDetails } from '../features/showDetails';

const Homepage = () => {
    const dispatch = useDispatch();
    const detailsShower = useSelector((state) => state.showDetails.value);
    const showState = useSelector((state) => state.show.value);
    const showId = useSelector((state) => state.findId.value);

    const [search, setSearch] = useState('');
    const [show, setShow] = useState([]);
    const [banner, setBanner] = useState([]);


    const [bannerHolder, setBannerHolder] = useState({
        banner1: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/387/969147.jpg',
        banner2: 'https://static.tvmaze.com/uploads/images/original_untouched/362/906898.jpg',
        banner3: 'https://static.tvmaze.com/uploads/images/original_untouched/387/969147.jpg',
    })

    // useEffect(() => {
    //     getBanner(1);
    // }, [])

    console.log(showState);

    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`
        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



    }

    const getBanner = async (id) => {
        const url = `https://api.tvmaze.com/shows/${id}/images`
        await fetch(url)
            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { setBanner(data) })
            .catch(err => console.warn("ERROR", err));
        console.log(banner);
    }



    const handleSearch = (e) => {
        e.preventDefault();

        getSeries(search);
        dispatch(findShow(search));
        dispatch(showDetails(false));
        setSearch('');
    }
    useEffect(() => {
        getSeries(showState);
        getBanner(showId);
    }, [])

    console.log(banner);



    const handleShowSearch = (e) => {
        setSearch(e.target.value);

    }

    return (
        <Home>
            <Banner src={bannerHolder.banner3} />
            <h1>The Series Finder</h1>
            <Form onSubmit={handleSearch}>
                <input type='search' value={search}
                    placeholder='search for the show'
                    required
                    onChange={handleShowSearch}
                />
            </Form>

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

width:100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000;

h1{
    color: #fff;
}
`;


const Banner = styled.img`
max-width:758px;
height:140px;
margin-top: 50px;;

`;
const HomeWrapper = styled.div`
width:100%;
padding:0 5%;
display: flex;
justify-content: center;
flex-wrap: wrap;


`;

const Form = styled.form`


input{
    text-align: center;
}

`;