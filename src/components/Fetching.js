


export const netflixState = [];

export const getTvShow = async (query) => {
    const url = `https://api.tvmaze.com/shows/${query}`
    await fetch(url)


        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .then(data => { netflixState.push(data) }) //api data will be visible in your browser console. 

        .catch(err => console.warn("ERROR", err));

};


