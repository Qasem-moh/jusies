const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'f93abce715msh9382300de68f830p107bb0jsnc01cd1035536'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});