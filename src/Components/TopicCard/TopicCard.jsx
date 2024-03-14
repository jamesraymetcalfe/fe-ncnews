import "./TopicCard.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  return (
    <Link to={`/articles/topic/${topic.slug}`}>
      <Button
        id="button"
        variant="text"
        sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "gold" },
            textTransform: "initial"
        }}
      >
        #{topic.slug}
      </Button>
    </Link>
  );
};
