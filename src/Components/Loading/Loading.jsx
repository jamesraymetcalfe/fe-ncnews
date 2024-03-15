import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loading = () => {
  return (
    <section id="spinner">
      <CircularProgress sx={{ color: "gold" }} />
      </section>
  );
};
