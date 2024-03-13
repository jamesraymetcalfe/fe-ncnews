import { useEffect, useState } from "react";
import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CommentsList } from "../CommentsList/CommentsList";
import { Votes } from "../Votes/Votes";
import { AddComment } from "../AddComment/AddComment";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((data) => {
      setSingleArticle(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
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

          <Button
            id="add-comment"
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              marginLeft: "5px",
              "&:hover": { backgroundColor: "gold" },
            }}
            onClick={() => {
              setShowCommentForm(!showCommentForm);
            }}
          >
            {showCommentForm ? "Hide Input" : "Add Comment"}
          </Button>
        </section>

        {showCommentForm ? <AddComment article_id={article_id} /> : null}
        {showComments ? <CommentsList article_id={article_id} /> : null}
      </Card>
    </section>
  );
};
