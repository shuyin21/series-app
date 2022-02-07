import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ShowCard from '../components/ShowCard';
import { useSelector, useDispatch } from 'react-redux';
import { findShow } from '../features/showFinder';
import { showDetails } from '../features/showDetails';
import BannerComp from '../components/Banner';
import MovieTrailer from '../components/MovieTrailer';
import Footer from '../components/Footer';
import ShowcaseBlock from '../components/ShowcaseBlock';
import { posterData } from '../components/imageData';

import ChannelCard from '../components/ChannelCard';
import Disney from '../Images/disney+.png';
import Netflix from '../Images/netflix.png';
import PrimeV from '../Images/primeV.png';
import HboMax from '../Images/hbo-max_logo_.jpg';
import appleTv from '../Images/appleTv.jpg';

const Homepage = () => {
    const dispatch = useDispatch();
    const detailsShower = useSelector((state) => state.showDetails.value);
    const showState = useSelector((state) => state.show.value);
    const showId = useSelector((state) => state.findId.value);

    const [search, setSearch] = useState('');
    const [show, setShow] = useState([]);






    console.log(showState);

    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`

        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



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

    }, [])


    console.log(posterData[0].image);


    const handleShowSearch = (e) => {
        setSearch(e.target.value);

    }

    return (
        <Main>

            <Home>

                <LeftSide><ShowcaseBlock src={posterData} /></LeftSide>
                <Middle>
                    {/* <GifP gif={netflixGif} /> */}
                    <BannerComp />
                    {/* <h1>The Series Finder</h1>
                    <Form onSubmit={handleSearch}>
                        <input type='search' value={search}
                            placeholder='search for the show'
                            required
                            onChange={handleShowSearch}
                        />
                    </Form>
                    <MovieTrailer /> */}
                    <CardWrapper>
                        <ChannelCard image={Disney} linkTo='details' />
                        <ChannelCard image={HboMax} linkTo='details' />
                        <ChannelCard image={PrimeV} linkTo='details' />
                    </CardWrapper>
                    <LongCardWrapper>
                        <ChannelCard image={Netflix} linkTo='details' />
                        <ChannelCard image={appleTv} linkTo='details' />
                    </LongCardWrapper>

                </Middle>

                <RightSide><ShowcaseBlock src={posterData} /></RightSide>


            </Home>
            <HomeWrapper>
                {show.map(series => (
                    <ShowCard key={series.show.id} show={series} />

                ))}

            </HomeWrapper>
            <Footer />
        </Main>
    );
};

export default Homepage;

// const GifP = styled(GifPlayer)`
// width:500px;
// height:300px;
// `;


const Main = styled.div`
width:100vw;
height:100%;
display: flex;
flex-direction:column;
`;
const Home = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding:0 40px;


@media screen and (max-width:768px){
    padding:0;
}
h1{
    color: #fff;
}
`;

const LeftSide = styled.div`
width:20vw;
position:relative;

@media screen and (max-width:1000px){
    display:none;
}
`;

const Middle = styled.div`
width:50vw;
align-items: center;
justify-content: center;
text-align: center;


@media screen and (max-width:1000px){
    width:100%;
}
`;
const RightSide = styled.div`
width:20vw;
@media screen and (max-width:1000px){
    display:none;
}
`;

const HomeWrapper = styled.div`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding:0 10%;


`;

const Form = styled.form`


input{
    text-align: center;
}

`;

const CardWrapper = styled.div`
position: relative;
min-height:200px;
overflow-x:hidden;
display:flex;
grid-template-columns: 30% 30% 30%;
top: 72px;
padding:20px;


@media screen and (max-width: 768px){
    padding:0;
    
}

`;

const LongCardWrapper = styled.div`

position: relative;
min-height:280px;
overflow-x:hidden;
display:flex;
grid-template-columns: 50% 50%;
top: 72px;
padding:20px 10%;
`;