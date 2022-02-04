import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStarHalfAlt } from 'react-icons/fa';
const StreamingList = () => {

    const [todayDate, setTodayDate] = useState("2022-02-02");
    const [schedules, setSchedules] = useState([]);

    const getTodayDate = () => {
        let d = new Date().toISOString();
        // let y = d.getFullYear();
        // let m = d.getMonth() + 1;

        // let day = d.getDate();

        // setTodayDate((y + '-' + m + '-' + day).toISOString());
        let y = d.slice(0, 10);
        setTodayDate(y);
    }


    console.log(todayDate);

    const getSchedules = async (query) => {
        const url = ` https://api.tvmaze.com/schedule/web?date=${query}&country=`

        await fetch(url)

            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => { console.log(data); setSchedules(data) }) //api data will be visible in your browser console. 

            .catch(err => console.warn("ERROR", err));



    }
    useEffect(() => {
        getTodayDate();
        getSchedules(todayDate);
    }, [todayDate]);

    return (



        <Main>
            {schedules.map(show => (
                <Card key={show.id}>
                    {show.image ? <Image src={show.image.original} />
                        : <Image src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
                    }

                    <Title>
                        <h3>{show._embedded.show.name}</h3>
                    </Title>
                    <Title>
                        {show._embedded.show.webChannel ?
                            <h3>{show._embedded.show.webChannel.name}</h3>
                            : <h3>unknown</h3>}

                        {show._embedded.show.rating ?
                            <p><StarIcon />{show._embedded.show.rating.average}</p>
                            : <p>No Score</p>}
                    </Title>
                </Card>
            ))}



        </Main>);
};

export default StreamingList;


const Main = styled.div`
width:100vw;
height:100vh;
padding:10%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;

`;

const Card = styled.div`
margin:20px;
width:200px;

display:flex;
justify-content:space-between;
flex-direction:column;
background-color: #000;
`;

const Image = styled.img`
                        display: block;
						width: 100%;
						height: 350px;
						object-fit: cover;
						border-radius: 16px;
						box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
						transition: 0.4s;
                        cursor: pointer;

&:hover{
                        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
							transform: scale(1.05);
}
`;

const Title = styled.div`
height:50px;
width:100%;

h3{
    color:white;
    font-size: 18px;
    font-weight: bold;
}
p{
    color:yellow;
}
`;

const StarIcon = styled(FaStarHalfAlt)`
color:yellow;
width:10px;
height:10px;
`;