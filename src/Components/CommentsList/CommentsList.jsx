import { getCommentsById } from "../../api";
import { CommentCard } from "../CommentCard/CommentCard";
import "./CommentsList.css";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { AddComment } from "../AddComment/AddComment";
import Button from "@mui/material/Button";

export const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((data) => {
      setCommentsList(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
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

      {showCommentForm ? <AddComment article_id={article_id} setCommentsList={setCommentsList}  /> : null}
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
