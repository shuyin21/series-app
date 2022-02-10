import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieTrailer from '../components/MovieTrailer';
import ShowCard from '../components/ShowCard';

import { useSelector, useDispatch } from 'react-redux';
import { findShow } from '../features/showFinder';
import { showDetails } from '../features/showDetails';
import { netflixDetails } from '../features/netflixReducer';
import { showLogo } from '../features/logoSelector';
import ShowcaseBlock from '../components/ShowcaseBlock';
import netflix from '../Images/netflix.png';
import disney from '../Images/disney.png';
import hbo from '../Images/hbo.png';
import prime from '../Images/prime.png';
import apple from '../Images/apple.png';
import { appleTrailers, disneyTrailers, hboTrailers, netflixTrailers, primeTrailers } from '../data/trailerData';
import WebCard from '../components/WebCard';


const valami = [];
const netflixState = [];
const ChannelPage = ({ url }) => {

    const dispatch = useDispatch();
    const webLogo = useSelector((state) => state.logoDetails.value);
    const netflixShows = useSelector((state) => state.netflixShows.value);


    const [search, setSearch] = useState('archive');
    const [show, setShow] = useState([]);
    const [imgSrc, setImgSrc] = useState([
        netflix, disney, hbo, prime, apple
    ]);
    const [videoURL, setVideoURL] =
        useState([netflixTrailers, disneyTrailers, hboTrailers, primeTrailers, appleTrailers]);


    const [webData, setWebData] = useState([]);




    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`

        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



    }

    const getTvShow = async (query) => {
        const url = `https://api.tvmaze.com/shows/${query}`
        await fetch(url)


            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { netflixState.push(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

    }




    const getWebSeries = async () => {
        const url = ' https://api.tvmaze.com/schedule/full'
        await fetch(url)
            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setWebData(data); }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

    }

    const handleSearch = (e) => {
        e.preventDefault();

        getSeries(search);
        dispatch(findShow(search));
        dispatch(showDetails(false));
        setSearch('');
    }

    const bestFunction = () => {
        const holder = [];
        const flixHolder = [];
        webData.map(x => {
            holder.push({
                name: x._embedded.show.name, web: x._embedded.show.webChannel ? x._embedded.show.webChannel.name :
                    'not exist', id: x._embedded.show.id
            })
        });
        const reducer = holder.reduce(function (newArr, item) {
            if (item.web === 'Netflix') {
                newArr.push([item.id]);


            }
            return newArr;
        }, []);

        const uni = uniqueArray1(reducer);
        // netflixState.push(uni);

        uni.map(x => getTvShow(x));

        setTimeout(() => { console.log(netflixState); }, 2000);
        setTimeout(() => { dispatch(netflixDetails(netflixState)); }, 2000);
    }


    useEffect(() => {
        // getSeries(showState);
        getSeries(search);
        console.log(videoURL[webLogo][0].src);
        getWebSeries();

    }, [])





    const handleShowSearch = (e) => {
        setSearch(e.target.value);

    }

    function uniqueArray1(ar) {

        var j = {};
        ar.forEach(function (v) {
            j[v + '::' + typeof v] = v;
        });

        return Object.keys(j).map(function (v) {
            return j[v];
        });

    }
    const reduxValue = () => {
        console.log(netflixShows);
    }

    return (

        <Main>
            <MovieTrailer url={[videoURL[webLogo][0].src, videoURL[webLogo][1].src, videoURL[webLogo][2].src, videoURL[webLogo][3].src]} />
            <LogoWrapper>
                <Logo src={imgSrc[webLogo]} />
            </LogoWrapper>

            <Wrapper>

                <Form onSubmit={handleSearch}>
                    <input type='search' value={search}
                        placeholder='search for the show'
                        required
                        onChange={handleShowSearch}
                    />
                </Form>


                <button onClick={bestFunction}>best</button>
                <button onClick={reduxValue}>show redux</button>

                {/* <button onClick={unique(netflixHolder)}>netflix</button> */}
            </Wrapper>

            <HomeWrapper>

                {netflixShows.map(item =>


                    <WebCard key={item.id} showName={item.name} img={item.image} />
                )}
                {/* {show.map(series => (


                    <WebCard key={series.show.id} showName={series.show.name} img={series.show.image} />
                ))} */}
                {/* {
                    webData.map((data) => (
                        data._embedded.show.webChannel ? <h3 key={data.id}>{data._embedded.show.webChannel}</h3> : <></>

                    )

                    )
                } */}
            </HomeWrapper>
        </Main>


    );
};

export default ChannelPage;


const Main = styled.div`
width: 100vw;
height:100%;
display: flex;
flex-direction: column;
align-items: center;

`;
const LogoWrapper = styled.div`
width:100%;
height:200px;
display: flex;
align-items: center;
justify-content: center;
`;
const Logo = styled.img`
width:300px;
height:150px;
/* border:1px solid #fff; */
@media screen and (max-width:768px){
    width:200px;
    height:90px;
}

`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Form = styled.form`
margin-top: 50px;


input{
    height: 50px;
    width:200px;
    border-radius: 15px;
    border:1px solid white;
    background-color:#333;
    color:#fff;
    text-align: center;
}

`;
const HomeWrapper = styled.div`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding:0 10%;


`;