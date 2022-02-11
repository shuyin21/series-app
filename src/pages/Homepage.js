import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import BannerComp from '../components/Banner';

import Footer from '../components/Footer';

import { posterData } from '../data/imageData';



import { useSelector, useDispatch } from 'react-redux';
import ChannelCard from '../components/ChannelCard';
import Disney from '../Images/disney.png';
import Netflix from '../Images/netflix.png';
import PrimeV from '../Images/prime.png';
import HboMax from '../Images/hbo.png';
import appleTv from '../Images/apple.png';
import SidePanel from '../components/SidePanel';




const Homepage = () => {


    const [webData, setWebData] = useState([]);
    useEffect(() => {
        // getWebSeries();
        // setTimeout(() => { bestFunction() }, 3000)
    }, [])

    console.log(posterData[0].image);
    // const getTvShow = async (query) => {
    //     const url = `https://api.tvmaze.com/shows/${query}`
    //     await fetch(url)


    //         .then((res) => res.text())
    //         .then((text) => text.length ? JSON.parse(text) : {})
    //         .then(data => { netflixState.push(data) }) //api data will be visible in your browser console. 

    //         .catch(err => console.warn("ERROR", err));

    // }
    // const getWebSeries = async () => {
    //     const url = ' https://api.tvmaze.com/schedule/full';

    //     const holder = [];

    //     await fetch(url)
    //         .then((res) => res.text())
    //         .then((text) => text.length ? JSON.parse(text) : {})
    //         .then(data => {
    //             data.map(x => {
    //                 holder.push({
    //                     name: x._embedded.show.name, web: x._embedded.show.webChannel ? x._embedded.show.webChannel.name :
    //                         'not exist', id: x._embedded.show.id
    //                 })
    //             });
    //             const reducer = holder.reduce(function (newArr, item) {
    //                 if (item.web === 'Netflix') {
    //                     newArr.push([item.id]);


    //                 }
    //                 return newArr;
    //             }, []);

    //             const uni = uniqueArray1(reducer);


    //             uni.map(x => getTvShow(x));

    //             console.log(netflixState);
    //             setTimeout(() => { dispatch(netflixDetails(netflixState)); }, 2000);


    //         }) 

    //         .catch(err => console.warn("ERROR", err));




    // }



    return (
        <Main>
            <BannerWrapper><BannerComp /></BannerWrapper>
            <Home>


                <SidePanel title={'New Shows'} image1={posterData[0].image}
                    image2={posterData[3].image}></SidePanel>
                <Middle>




                    <CardWrapper>
                        <ChannelCard image={Disney} linkTo='channel' value='1' />
                        <ChannelCard image={HboMax} linkTo='channel' value='2' />


                    </CardWrapper>

                    <ChannelCard image={Netflix} linkTo='channel' value='0' />

                    <CardWrapper>
                        <ChannelCard image={PrimeV} linkTo='channel' value='3' />
                        <ChannelCard image={appleTv} linkTo='channel' value='4' />

                    </CardWrapper>


                </Middle>

                <SidePanel title={'Top Rated'} image1={posterData[1].image}
                    image2={posterData[2].image}></SidePanel>


            </Home>

            <Footer />
        </Main>
    );
};

export default Homepage;




const Main = styled.div`
width:100vw;

display: flex;
align-items: center;
flex-direction:column;
overflow-x: hidden;
`;
const Home = styled.div`
display:flex;

justify-content: space-between;
align-items: center;
padding:0 40px;
margin-bottom:50px;


@media screen and (max-width:768px){
    padding:0;
    height:80vh;
    justify-content: space-around;
    
}
h1{
    color: #fff;
}
`;
const BannerWrapper = styled.div`
width:50vw;
height:300px;

@media screen and (max-width: 1000px){
    width:80vw;
    height:150px;
}

`;


const Middle = styled.div`
width:50vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;



@media screen and (max-width:1000px){
    width:100%;

}
`;

const CardWrapper = styled.div`
position: relative;

overflow-x:hidden;
display:flex;



padding:20px;


@media screen and (max-width: 768px){
    padding:0;
 
}

`;