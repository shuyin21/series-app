import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerComp = () => {




    const [current, setCurrent] = useState(0);
    const bannerHolder = [
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/387/969147.jpg' }
        , { image: 'https://static.tvmaze.com/uploads/images/original_untouched/362/906898.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/387/969186.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/390/976667.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/original_untouched/384/960593.jpg' },]

    const length = bannerHolder.length;


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

    }


    return (

        <BannerWrapper src={bannerHolder[current].image} />





    );
};

export default BannerComp;


const BannerWrapper = styled.img`
max-width:60vw;
height:140px;
margin-top: 50px;;

`;