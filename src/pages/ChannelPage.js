import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieTrailer from '../components/MovieTrailer';
import ShowCard from '../components/ShowCard';

import { useSelector, useDispatch } from 'react-redux';
import { findShow } from '../features/showFinder';
import { showDetails } from '../features/showDetails';
import ShowcaseBlock from '../components/ShowcaseBlock';


const ChannelPage = () => {

    const dispatch = useDispatch();
    const detailsShower = useSelector((state) => state.showDetails.value);
    const showState = useSelector((state) => state.show.value);
    const showId = useSelector((state) => state.findId.value);

    const [search, setSearch] = useState('');
    const [show, setShow] = useState([]);


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


    const handleShowSearch = (e) => {
        setSearch(e.target.value);

    }
    return (

        <Main>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <Wrapper>
                <MovieTrailer />
                <Form onSubmit={handleSearch}>
                    <input type='search' value={search}
                        placeholder='search for the show'
                        required
                        onChange={handleShowSearch}
                    />
                </Form>
            </Wrapper>
            <HomeWrapper>
                {show.map(series => (
                    <ShowCard key={series.show.id} show={series} />

                ))}

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
border:1px solid #fff;

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