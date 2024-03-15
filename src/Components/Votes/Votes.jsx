import "./Votes.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import IconButton from "@mui/material/IconButton";
import { patchVote } from "../../api";
import { useState } from "react";

export const Votes = ({ votes, article_id }) => {
  const [newVote, setNewVote] = useState(votes);
  const [error, setError] = useState(null);
  const handleVote = (voteNum) => {
    const voteSum = newVote + voteNum;
    setNewVote(voteSum);
    patchVote(voteNum, article_id).catch(() => {
      setError(
        "Sorry, voting is not currently working. Please try again later"
      );
    });
  };

  return (
    <section className="votes">
      {error ? <p id="error-message"> {error} </p> : null}
      <IconButton
        aria-label="up vote comment"
        sx={{
          color: "black",
          border: "none",
          marginLeft: "5px",
        }}
        onClick={() => handleVote(1)}
      >
        <ThumbUpAltOutlinedIcon size="large" />
      </IconButton>
      {error ? <p id="vote-number"> X </p> : <p id="vote-number">{newVote}</p>}
      <IconButton
        aria-label="down vote article"
        sx={{
          color: "black",
          border: "none",
          marginLeft: "5px",
        }}
        onClick={() => handleVote(-1)}
      >
        <ThumbDownAltOutlinedIcon />
      </IconButton>
    </section>
  );
};
