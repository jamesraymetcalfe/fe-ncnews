import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <section id="spinner">
      <CircularProgress sx={{ color: "gold" }} />
      </section>
  );
};
