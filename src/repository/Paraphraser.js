import axios from "axios";

export const paraphraser = async (text, setParaphrasedText) => {
    //TODO Add a character limit set it 400 you have 10.000 character limit per month
    const options = {
        method: 'POST',
        url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
            'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
        },
        data: `{"language":"en","strength":3,"text":"${text}"}`
    };

    const postNewParaphrased = await axios.request(options)
    setParaphrasedText(postNewParaphrased.data);
}