import axios from "axios";

export const TextToAudio = async (text, setAudio) => {

    const options = {
        method: 'POST',
        url: 'https://text-to-speech53.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_TEXT_TO_SPEECH,
            'X-RapidAPI-Host': 'text-to-speech53.p.rapidapi.com'
        },
        data: {"text":`${text}`,"lang":"en","format":"wav"}
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return setAudio(response.data.speech)
    }).catch(function (error) {
        console.error(error);
    });
}
