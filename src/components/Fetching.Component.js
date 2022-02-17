import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTvShow, netflixState } from './Fetching';
import { netflixDetails } from '../features/netflixReducer';
import WebCard from '../components/WebCard';
import Spinner from './Spinner';

const FetchingComponent = () => {



    const dispatch = useDispatch();
    const netflixShows = useSelector((state) => state.netflixShows.value);
    const channel = useSelector((state) => state.channelDetails.value);

    const [channelName, setChannelName] = useState(channel);

    useEffect(() => {
        // if (channel == channelName) {
        //     return channelName;
        // }
        // else { setChannelName(channel) };

        getWebSeries();


    });


    console.log(channel);

    const channelChecker = () => {
        if (channel == 0) {
            return setChannelName('Netflix');
        }
        else if (channel == 2) {
            return 'HBO Max'
        }
        else if (channel == 1) {
            return 'Disney+'
        } else if (channel == 3) {
            return 'Prime Video'
        }
        else if (channel == 4) {
            return 'Apple Tv+'
        }

        // switch (channel) {
        //     case '0':
        //         return 'Netflix';
        //         break;
        //     case '1':
        //         return 'Disney+';
        //         break;
        //     case '2':
        //         return 'HBO Max';
        //         break;
        //     case '3':
        //         return 'Prime Video';
        //         break;
        //     case '4':
        //         return 'Apple TV+';
        //         break;
        //     default:
        //         return channelName;
        //         break;
        // }

    }

    console.log(channelName);

    const getWebSeries = async () => {
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
                console.log(channelName);
                const reducer = holder.reduce(function (newArr, item) {
                    if (item.web == channelName) {
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