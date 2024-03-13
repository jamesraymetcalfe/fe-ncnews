import "./AddComment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/User";
import Button from "@mui/material/Button";
import { postNewComment } from "../../api";

export const AddComment = ({ article_id }) => {
  const [newComment, setNewComment] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);

  const handleInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    setIsPostSuccessful(false);
    postNewComment(newComment, loggedInUser.username, article_id).then(() => {
      setNewComment("");
      setIsPostSuccessful(true);
    });
  };

  if (isPostSuccessful) {
    return (
      <section className="posting-message">
        <p>
          Thanks for getting involved! Refresh the page to view your comment
        </p>
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
          OK, cool
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
