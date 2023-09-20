import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
const KEY = process.env.REACT_APP_PUBLIC_KEY
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiServices = {
    async fetching(addr){
        const result = await axios.get(`${BASE_URL}${addr}`, options).then(data => data.data.items)
        return result
    }
}
