import axios from "axios";

export const TextToAudio = async (text, setAudio, country) => {

    const options = {
        method: 'POST',
        url: 'https://text-to-speech53.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
            'X-RapidAPI-Host': 'text-to-speech53.p.rapidapi.com'
        },
        data: { "text": `${text}`, "lang": `${country}`, "format": "wav" }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return setAudio(response.data.speech)
    }).catch(function (error) {
        console.error(error);
    });
}
