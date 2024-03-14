import "./TopicFilter.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const TopicFilter = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};
