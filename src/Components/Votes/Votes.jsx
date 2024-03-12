import "./Votes.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import IconButton from "@mui/material/IconButton";
import { patchVote } from "../../api";
import { useState } from "react";

export const Votes = ({ votes, article_id }) => {
  const [newVote, setNewVote] = useState(votes);
  const [error, setError] = useState(null);
  const handleVote = (voteNum) => {
    const voteSum = newVote + voteNum;
    setNewVote(voteSum);
    patchVote(voteNum, article_id).catch((error) => {
      const errorSum = newVote - voteNum;
      setNewVote(errorSum);
      setError("Sorry, voting is not currently working");
    });
  };

  return (
    <section className="votes">
        
      {error ? <p> {error} </p> : null}
      <IconButton
        aria-label="up vote comment"
        sx={{
          color: "black",
          border: "none",
          marginLeft: "5px",
        }}
        onClick={() => handleVote(1)}
      >
        <ArrowCircleUpIcon size="large" />
      </IconButton>
      <p id="vote-number">{newVote}</p>
      <IconButton
        aria-label="down vote article"
        sx={{
          color: "black",
          border: "none",
          marginLeft: "5px",
        }}
        onClick={() => handleVote(-1)}
      >
        <ArrowCircleDownIcon />
      </IconButton>
    </section>
  );
};
