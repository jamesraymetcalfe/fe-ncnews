import "./TopicFilter.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { TopicsList } from "../TopicsList/TopicsList";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { Loading } from "../Loading/Loading";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "../SortBy/SortBy";
import { OrderBy } from "../OrderBy/orderBy";

export const TopicFilter = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
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
    getArticles(sort_by, order, topic)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, [topic, sort_by, order]);

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
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};
