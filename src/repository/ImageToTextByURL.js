import axios from "axios";

export const ImageToTextByURL = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://image-to-text9.p.rapidapi.com/ocr',
    params: { url: url },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_TOOL_API,
      'X-RapidAPI-Host': 'image-to-text9.p.rapidapi.com'
    }
  };

  const getImageText = await axios.request(options)
  console.log(getImageText.data);
  return getImageText.data
}