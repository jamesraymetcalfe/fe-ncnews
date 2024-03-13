import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-srco.onrender.com/api/",
});

export const getArticles = () => {
  return newsApi.get("articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchVote = (voteNum, article_id) => {
  const patchBody = { inc_votes: voteNum };
  return newsApi
    .patch(`articles/${article_id}`, patchBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postNewComment = (newComment, username, article_id) => {
  const postBody = { username: username, body: newComment };
  return newsApi
    .post(`articles/${article_id}/comments`, postBody)
    .then((response) => {
      return response.data.comments;
    });
};
