import "./ArticlesList.css";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticles().then((data) => {
      setArticlesList(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <ul>
      {articlesList.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};
