import "./DeleteComment.css";
import Button from "@mui/material/Button";

export const DeleteComment = ({comment_id}) => {
  return (
    <section className="button">
      <Button
        disabled
        variant="text"
        sx={{
          "&:hover": { backgroundColor: "gold" },
        }}
      >
        Delete
      </Button>
    </section>
  );
};
