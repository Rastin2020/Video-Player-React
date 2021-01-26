const axios = require('axios');

const key = "AIzaSyDiJE60_6lcOZK-pitSwJwZbaKRJwDY0xE";
const endpoint = "https://www.googleapis.com/youtube/v3";

const callDetails = {
    baseURL: endpoint,
    params: {
        part: "snippet",
        maxResults: 5,
        key: key
    }
}

export default axios.create(callDetails);