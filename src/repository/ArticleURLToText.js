import axios from "axios";

export const ArticleURLToText = (url) => {

    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "english");
    encodedParams.append("url", url);

    const options = {
        method: 'POST',
        url: 'https://text-analysis12.p.rapidapi.com/article-extraction/api/v1.3',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
            'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
        },
        data: encodedParams
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        
    }).catch(function (error) {
        console.error(error);
    });
}