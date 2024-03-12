import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-srco.onrender.com/api/",
});

export const getArticles = () => {
  return newsApi.get("articles").then((response) => {
    return response.data.articles;
  });
};
