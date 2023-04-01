import axios from "axios";

export const Summarizer = async (text) => {
    const fixedText = text.replace(/\\/g, '').replace(/"/g, '\\"').replace(/\n/g, ' ');
    const options = {
        method: 'POST',
        url: 'https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
            'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
        },
        data: `{"language":"english","summary_percent":30,"text":"${fixedText}"}`
    };

    const getNewSummarizer = await axios.request(options)
    console.log(text);
    console.log(getNewSummarizer.data);
    return getNewSummarizer.data
}


