import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

import styled from 'styled-components';

const MovieTrailer = (props) => {
    //Setting up the initial states using
    // react hook 'useState"
    const [playingState, setPlayingState] = useState({ playing: false });
    const [video, setVideo] = useState("inception");


    //A function to fetch the required URL
    // and storing it inside the
    // videoURL state variable
    // function handleSearch() {
    //     movieTrailer(video).then((res) => {
    //         setVideoURL(res);
    //     });
    // }

    return (
        <App>
            {/* <SearchBox>
                <Label>
                    Search for any movies/shows:{" "}
                </Label>
                <Input type="text" onChange=
                    {(e) => { setVideo(e.target.value) }} />

                <Button onClick={() => { handleSearch() }}>
                    Search
                </Button>
            </SearchBox> */}


            <ReactPlayerBox
                url={props.url}
                playing
                muted
                width="100%"
                height="100%"
                config={{
                    file: {

                        attributes: {
                            autoPlay: true,
                            muted: true,
                            loop: true
                        }
                    }
                }} />
        </App>
    );
}

export default MovieTrailer;

const App = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 200px;
    width: 30%;
    font-size: 22px;


    @media screen and (max-width:768px){
    padding:0;
    width:60%;
    height:200px;
}
@media screen and (max-width:500px){
width:80%;
height:150px;
}
`;

const ReactPlayerBox = styled(ReactPlayer)`
/* width:100vw;
height:100%; */

`;

const SearchBox = styled.div`
height: 10vh;
`;
const Label = styled.label`

`;
const Input = styled.input`

`;
const Button = styled.button`
 box-sizing: border-box;
    height: 25px;
    font-size: 20px;
`;