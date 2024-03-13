import "./DeleteComment.css";
import Button from "@mui/material/Button";
import { UserContext } from "../../Context/User";
import { useContext, useState } from "react";
import { deleteCommentFromList } from "../../api";

export const DeleteComment = ({ comment }) => {
  const { loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = () => {
    setIsLoading(true);
    deleteCommentFromList(comment.comment_id).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="button">
      <Button
        disabled={loggedInUser.username !== comment.author}
        variant="text"
        onClick={() => {
          {
            handleDelete();
          }
        }}
        sx={{
          "&:hover": { backgroundColor: "gold" },
        }}
      >
        Delete
      </Button>
    </section>
  );
};
