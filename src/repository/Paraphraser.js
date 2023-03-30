import axios from "axios";

//TODO Add a character limit set it 400 you have 10.000 character limit per month
const options = {
    method: 'POST',
    url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
    headers: {
        'content-type': 'application/json',
        // 'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
        'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
    },
    data: '{"language":"en","strength":3,"text":"Begin this day, remembering that not everyone got the opportunity to wake up from their sleep this morning. The mere fact that you can witness this beautiful day in good health is the biggest sign that you have been abundantly blessed. Blessings"}'
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});