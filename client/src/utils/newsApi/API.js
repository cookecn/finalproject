import axios from "axios";
//const BASEURL = "https://newsapi.org";

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.Authentication);

//example api pull from "everything" using sample code
newsapi.v2.topHeadlines({
    sources: "",
    q: "",
    category: "",
    language: "en",
    country: "us"
}).then(response => {
    console.log(response);
});

newsapi.v2.sources({
    category: "",
    language: "en",
    country: "us"
}).then(response => {
    console.log(response);
});

//ADD PARAMATERS FOR SEARCHING FOR NEWS ARTICLES, SAVING NEWS ARTICLES
export default {
    

};