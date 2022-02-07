import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

import styled from 'styled-components';

const MovieTrailer = () => {
    //Setting up the initial states using
    // react hook 'useState"
    const [playingState, setPlayingState] = useState({ playing: false });
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] =
        useState([{ src: 'https://youtu.be/6Jg_rkKtJgo' }, { src: "https://youtu.be/ZTI6T5M8Fj0" }, { src: 'https://youtu.be/Jtdh0Tkqfdw' }
        ]);

    //A function to fetch the required URL
    // and storing it inside the
    // videoURL state variable
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

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

      // Using 'ReactPlayer' component to
            // display the video
            <ReactPlayerBox
                url={[videoURL[0].src, videoURL[1].src, videoURL[2].src]}
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
    height: 400px;
    width: 100%;
    font-size: 22px;


    @media screen and (max-width:768px){
    padding:0;
    width:400px;
    height:300px;
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