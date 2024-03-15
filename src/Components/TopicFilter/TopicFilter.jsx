import "./TopicFilter.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { TopicsList } from "../TopicsList/TopicsList";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const TopicFilter = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, [topic]);

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <>
      <section className="topic-links">
        <TopicsList />
      </section>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
