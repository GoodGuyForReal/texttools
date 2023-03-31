import axios from "axios";

export const paraphraser = async (text, setParaphrasedText) => {
    //TODO Add a character limit set it 400 you have 10.000 character limit per month
    const encodedParams = new URLSearchParams();
    encodedParams.append("text", `${text}`);
    encodedParams.append("unique", "true");
    encodedParams.append("mode", "fluent");

    const optionsPOST = {
        method: 'POST',
        url: 'https://best-paraphrasing-api.p.rapidapi.com/rewriter',
        params: {
            text: `${text}`,
            unique: 'true'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
            'X-RapidAPI-Host': 'best-paraphrasing-api.p.rapidapi.com'
        },
        data: encodedParams
    };

    const postNewParaphrased = await axios.request(optionsPOST)
    setParaphrasedText(postNewParaphrased.data);
}