import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BannerComp = () => {


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };





    const [current, setCurrent] = useState(0);
    const bannerHolder = [
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/387/969147.jpg' }
        , { image: 'https://static.tvmaze.com/uploads/images/original_untouched/362/906898.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/387/969186.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/medium_leaderboard/390/976667.jpg' },
        { image: 'https://static.tvmaze.com/uploads/images/original_untouched/384/960593.jpg' },]

    const length = bannerHolder.length;


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide()
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [current]);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

    }


    return (

        // <BannerWrapper src={bannerHolder[current].image} />


        <Carousel {...settings} >
            <Wrap>
                <a>
                    <img src={bannerHolder[0].image} alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={bannerHolder[1].image} alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={bannerHolder[2].image} alt='' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={bannerHolder[3].image} alt='' />
                </a>
            </Wrap>

        </Carousel>






    );
};

export default BannerComp;


const BannerWrapper = styled.img`

height:140px;
margin-top: 50px;;
width:100%;
@media screen and (max-width:768px){
    
    max-width:unset;
    width: 100%;
}
`;




const Carousel = styled(Slider)`
margin-top:20px;
& > button {
    opacity:0;
    height:100%;
    width: 5vw;
    z-index:1;
    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}
ul li button {
    &:before{
        font-size: 10px;
        color: rgb(150, 158, 171);
    }
}
li.slick-active button:before {
    color:white;
}
.slick-list {
    overflow:initial;
}
.slick-prev {
    left: -75px;
}
.slick-next {
    right: -75px;
}
`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
        width:100%;
        height:100%;
    }
    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
}
`;