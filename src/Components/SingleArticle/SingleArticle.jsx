import { useEffect, useState } from "react";
import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CommentsList } from "../CommentsList/CommentsList";
import { Votes } from "../Votes/Votes";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { Loading } from "../Loading/Loading";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((data) => {
        setSingleArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, []);

  if (isLoading) {
    return <Loading/>;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <>
      <section className="card">
        <Card id="card" sx={{ width: 500 }}>
          <CardHeader
            title={singleArticle.title}
            subheader={singleArticle.created_at}
          />
          <CardMedia
            component="img"
            sx={{ height: 375 }}
            image={singleArticle.article_img_url}
            alt="Paella dish"
          />
          <p id="body">{singleArticle.body}</p>

          <Votes votes={singleArticle.votes} article_id={article_id} />
          <section className="comment-buttons">
            <Button
              id="show-comment"
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                marginLeft: "5px",
                "&:hover": { backgroundColor: "gold" },
              }}
              onClick={() => {
                setShowComments(!showComments);
              }}
            >
              {showComments ? "Hide Comments" : "View Comments"}
            </Button>
          </section>
          {showComments ? <CommentsList article_id={article_id} /> : null}
        </Card>
      </section>
    </>
  );
};
