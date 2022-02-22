import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieTrailer from '../components/MovieTrailer';
import ShowCard from '../components/ShowCard';

import { useSelector, useDispatch } from 'react-redux';
import { findShow } from '../features/showFinder';
import { showDetails } from '../features/showDetails';
// import { getTvShow, netflixState } from '../components/Fetching';
import { showLogo } from '../features/logoSelector';
import ShowcaseBlock from '../components/ShowcaseBlock';
import netflix from '../Images/netflix.png';
import disney from '../Images/disney.png';
import hbo from '../Images/hbo.png';
import prime from '../Images/prime.png';
import apple from '../Images/apple.png';
import { appleTrailers, disneyTrailers, hboTrailers, netflixTrailers, primeTrailers } from '../data/trailerData';
import WebCard from '../components/WebCard';

import FetchingComponent from '../components/Fetching.Component';
import { netflixDetails } from '../features/netflixReducer';
import Spinner from '../components/Spinner';



const netflixState = [];
const ChannelPage = (props) => {

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

    const [channelName, setChannelName] = useState();





    const getSeries = async (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}&limit=20`

        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { setShow(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



    }



    const handleSearch = (e) => {
        e.preventDefault();

        getSeries(search);
        dispatch(findShow(search));
        dispatch(showDetails(false));
        setSearch('');
    }
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const someMethod = () => {
        // Force a render without state change...
        forceUpdate();
    }

    useEffect(() => {
        someMethod();
        console.log(channelName);

        // getSeries(showState);
        getSeries(search);
        getWebSeries(props.channelValue);


    }, [])





    const handleShowSearch = (e) => {
        setSearch(e.target.value);

    }


    const reduxValue = () => {
        console.log(netflixShows);
    }

    const getWebSeries = async (web) => {
        const url = ' https://api.tvmaze.com/schedule/full';
        const holder = [];

        await fetch(url)
            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => {
                data.map(x => {
                    holder.push({
                        name: x._embedded.show.name, web: x._embedded.show.webChannel ? x._embedded.show.webChannel.name :
                            'not exist', id: x._embedded.show.id
                    })
                });
                const reducer = holder.reduce(function (newArr, item) {
                    if (item.web === web) {
                        newArr.push([item.id]);
                    }
                    return newArr;
                }, []);
                const uni = uniqueArray1(reducer);
                console.log(uni);
                uni.map(x => getTvShow(x));
                console.log(netflixState);
                setTimeout(() => { dispatch(netflixDetails(netflixState)); }, 2000);
            })
            .catch(err => console.warn("ERROR", err));
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



    const getTvShow = async (query) => {
        const url = `https://api.tvmaze.com/shows/${query}`
        await fetch(url)


            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { netflixState.push(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));

    };


    if (netflixShows < 1) {
        return <Spinner />
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



                <button onClick={reduxValue}>show redux</button>


            </Wrapper>

            <HomeWrapper>
                <h1>{props.channelValue}</h1>
                {

                    netflixShows.map(item =>


                        <WebCard key={item.id} showName={item.name} img={item.image} />
                    )
                }

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