import { getCommentsById } from "../../api";
import { CommentCard } from "../CommentCard/CommentCard";
import "./CommentsList.css";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <ul>
      {commentsList.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  );
};
