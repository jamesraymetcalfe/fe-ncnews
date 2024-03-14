import "./ArticlesList.css";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { TopicsList } from "../TopicsList/TopicsList";
import { useSearchParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  const setSortBy = (sortTerm) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortTerm);
    setSearchParams(newParams);
  };


  const setOrderBy = (orderTerm) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", orderTerm);
    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles(sort_by, order).then((data) => {
      setArticlesList(data);
      setIsLoading(false);
    });
  }, [sort_by, order]);
  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <>
      <section className="sorting-buttons">
        <h4 id="arrange-title">ARRANGE BY:</h4>
        <ButtonGroup variant="outlined">
          <Button onClick={() => setSortBy("created_at")}>Date</Button>
          <Button onClick={() => setSortBy("comment_count")}>
            Comment Count
          </Button>
          <Button onClick={() => setSortBy("votes")}>Votes</Button>
        </ButtonGroup>
      </section>
      <section className="ordering-buttons">
        <ButtonGroup variant="outlined" id="order-by">
          <Button onClick={() => setOrderBy("DESC")}>descending</Button>
          <Button onClick={() => setOrderBy("ASC")}>ascending</Button>
        </ButtonGroup>
      </section>
      <section></section>
      <section className="topic-links">
        <TopicsList />
      </section>
      <ul>
        {articlesList.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
