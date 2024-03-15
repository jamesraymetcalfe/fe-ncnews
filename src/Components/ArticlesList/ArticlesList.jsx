import "./ArticlesList.css";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { TopicsList } from "../TopicsList/TopicsList";
import { useSearchParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { SortBy } from "../SortBy/SortBy";
import { OrderBy } from "../OrderBy/orderBy";

export const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");

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
    getArticles(sort_by, order)
      .then((data) => {
        setArticlesList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, [sort_by, order]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <>
      <SortBy sort_by={sort_by} setSortBy={setSortBy} />
      <OrderBy order={order} setOrderBy={setOrderBy} />
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
