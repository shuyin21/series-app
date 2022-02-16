import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTvShow, netflixState } from './Fetching';
import { netflixDetails } from '../features/netflixReducer';
import WebCard from '../components/WebCard';
import Spinner from './Spinner';

const FetchingComponent = () => {

    const [channelName, setChannelName] = useState('valami');

    const dispatch = useDispatch();
    const netflixShows = useSelector((state) => state.netflixShows.value);
    const channel = useSelector((state) => state.logoDetails.value);

    useEffect(() => {

        getWebSeries();
    }, []);


    console.log(channel);



    console.log(channelName);

    const getWebSeries = async () => {
        const url = ' https://api.tvmaze.com/schedule/full';

        const holder = [];

        if (channel === 0) {
            setChannelName('Netflix')
        }
        else if (channel === 1) {
            setChannelName('Disney+');
        }

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
                    if (item.web === 'Netflix') {
                        newArr.push([item.id]);


                    }
                    return newArr;
                }, []);

                const uni = uniqueArray1(reducer);


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
    if (netflixShows < 1) {
        return <Spinner />
    }
    return (
        <>
            {
                netflixShows.map(item =>


                    <WebCard key={item.id} showName={item.name} img={item.image} />
                )
            }
        </>
    )
}

export default FetchingComponent