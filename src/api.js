import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-srco.onrender.com/api/",
});

export const getArticles = (sort_by, order, topic) => {
  return newsApi
    .get("articles", { params: { sort_by, order, topic } })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      throw error;
    });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCommentsById = (article_id) => {
  return newsApi
    .get(`articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      throw error;
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
      return response.data.comment;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteCommentFromList = (comment_id) => {
  return newsApi
    .delete(`comments/${comment_id}`)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTopics = () => {
  return newsApi
    .get("topics")
    .then((response) => {
      return response.data.topics;
    })
    .catch((error) => {
      throw error;
    });
};

// export const getArticlesByTopic = (topic) => {
//   return newsApi
//     .get(`articles?topic=${topic}`)
//     .then((response) => {
//       return response.data.articles;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
