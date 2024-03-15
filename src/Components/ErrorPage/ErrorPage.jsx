import "./ErrorPage.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const ErrorPage = ({ error }) => {
  return (
    <section className="error">
      <Paper elevation={3}>
        <Typography id="message" variant="h5">
          {" "}
          Oh no, that's an error ...{" "}
        </Typography>
        {error ? (
          <Typography id="message" variant="h5">
            {" "}
            sorry, {error}{" "}
          </Typography>
        ) : (
          <Typography id="message" variant="h5">
            sorry, path not found
          </Typography>
        )}
        <img
          src="https://www.developerway.com/_next/image?url=%2Fassets%2Fhow-to-handle-errors-in-react%2Fwelcome.png&w=1080&q=75"
          alt="a happy looking cat who has just knocked over a glass of water"
          id="error-img"
        />
      </Paper>
    </section>
  );
};
