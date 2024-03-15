import "./AddComment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/User";
import Button from "@mui/material/Button";
import { postNewComment } from "../../api";
import { Loading } from "../Loading/Loading";

export const AddComment = ({ article_id, setCommentsList }) => {
  const [newComment, setNewComment] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setIsPostSuccessful(false);
    postNewComment(newComment, loggedInUser.username, article_id)
      .then((newCommentFromApi) => {
        setNewComment("");
        setIsPostSuccessful(true);
        setCommentsList((currentComments) => {
          return [newCommentFromApi, ...currentComments];
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(
          "Sorry, new comments are not currently working. Please try again later"
        );
      });
  };

  if (isLoading) {
    return <Loading/>;
  } else if (isPostSuccessful) {
    return (
      <section className="posting-message">
        <p>Thanks for getting involved!</p>
        <Button
          id="hide-button"
          variant="outlined"
          size="small"
          onClick={() => {
            setIsPostSuccessful(false);
          }}
          sx={{
            color: "black",
            backgroundColor: "gold",
            borderColor: "gold",
            marginLeft: "5px",
            "&:hover": { backgroundColor: "gold", borderColor: "black" },
          }}
        >
          Cool
        </Button>
      </section>
    );
  } else if (error) {
    return (
      <section className="posting-message">
        <p>{error}</p>
        <Button
          id="hide-button"
          variant="outlined"
          size="small"
          onClick={() => {
            setError("");
          }}
          sx={{
            color: "black",
            backgroundColor: "gold",
            borderColor: "gold",
            marginLeft: "5px",
            "&:hover": { backgroundColor: "gold", borderColor: "black" },
          }}
        >
          Hide
        </Button>
      </section>
    );
  }

  return (
    <section>
      <Box
        id="box"
        sx={{
          width: 500,
          maxWidth: "95%",
        }}
      >
        <TextField
          fullWidth
          label="Add a Comment..."
          id="fullWidth"
          onChange={handleInput}
          value={newComment}
          sx={{
            width: "400px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& label.Mui-focused": {
              color: "black",
            },
          }}
        />
      </Box>
      <section className="submit-buttons">
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            handleSubmit();
          }}
          disabled={newComment === ""}
          sx={{
            color: "black",
            backgroundColor: "gold",
            borderColor: "gold",
            marginLeft: "5px",
            "&:hover": { backgroundColor: "gold", borderColor: "black" },
          }}
        >
          Comment
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            setNewComment("");
          }}
          sx={{
            color: "black",
            backgroundColor: "gold",
            borderColor: "gold",
            marginLeft: "5px",
            "&:hover": { backgroundColor: "gold", borderColor: "black" },
          }}
        >
          Cancel
        </Button>
      </section>
    </section>
  );
};
