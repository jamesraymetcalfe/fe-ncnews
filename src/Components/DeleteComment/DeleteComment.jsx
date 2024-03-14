import "./DeleteComment.css";
import Button from "@mui/material/Button";
import { UserContext } from "../../Context/User";
import { useContext, useState } from "react";
import { deleteCommentFromList } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export const DeleteComment = ({ comment, setCommentsList }) => {
  const { loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    setIsLoading(true);
    deleteCommentFromList(comment.comment_id).then(() => {
      setCommentsList((previousComments) =>
        previousComments.filter(
          (comments) => comments.comment_id !== comment.comment_id
        )
      );
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <section className="button">
      <Button
        disabled={loggedInUser.username !== comment.author}
        variant="text"
        sx={{
          "&:hover": { backgroundColor: "gold" },
        }}
        onClick={handleClickOpen}
      >
        delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <p>Are you sure you want to delete?</p>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "black", "&:hover": { backgroundColor: "gold" } }}
            onClick={handleDelete}
            autoFocus
          >
            Yes
          </Button>
          <Button
            sx={{ color: "black", "&:hover": { backgroundColor: "gold" } }}
            onClick={handleClose}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};
