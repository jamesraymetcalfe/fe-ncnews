import "./SortBy.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const SortBy = ({ setSortBy }) => {
  return (
    <section className="sorting-buttons">
      <h4 id="arrange-title">ARRANGE BY:</h4>
      <ButtonGroup variant="outlined">
        <Button onClick={() => setSortBy("created_at")}>Date</Button>
        <Button onClick={() => setSortBy("comment_count")}>
          Comment Count
        </Button>
        <Button onClick={() => setSortBy("votes")}>Votes</Button>
      </ButtonGroup>
    </section>
  );
};
