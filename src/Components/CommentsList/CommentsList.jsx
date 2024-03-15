import { getCommentsById } from "../../api";
import { CommentCard } from "../CommentCard/CommentCard";
import "./CommentsList.css";
import { useState, useEffect } from "react";
import { AddComment } from "../AddComment/AddComment";
import Button from "@mui/material/Button";
import { Loading } from "../Loading/Loading";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id)
      .then((data) => {
        setCommentsList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <section>
      <section className="add-comment">
        <Button
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

      {showCommentForm ? (
        <AddComment article_id={article_id} setCommentsList={setCommentsList} />
      ) : null}
      <ul>
        {commentsList.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              setCommentsList={setCommentsList}
            />
          );
        })}
      </ul>
    </section>
  );
};
