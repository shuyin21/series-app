import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ShowcaseBlock = (props) => {

    const [current, setCurrent] = useState(0);


    const length = props.src.length;


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
        <ShowcaseWrapper src={props.src[current].image} />





    );
};

export default ShowcaseBlock;


const ShowcaseWrapper = styled.img`

height:60vh;
width:90%;
margin:5%;
border:1px solid #fff;


`;
