import { Button } from "@mui/material";
import "./UserCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../Context/User";
import { useContext } from "react";

export const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser(user);
  };

  return (
    <>
      <section className="user-cards">
        <Card
          id="user-card"
          sx={{ display: "flex", margin: "1em", width: 350, height: 200, cursor: "pointer" }}
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            sx={{
              width: "45%",
              height: "100%",
              objectFit: "contain",
              padding: "0.2em",
            }}
            image={user.avatar_url}
          />
          <Box>
            <CardContent>
              <Typography variant="h5">{user.username}</Typography>
              <Typography variant="subtitle1">{user.name}</Typography>
            </CardContent>
          </Box>
        </Card>
      </section>
    </>
  );
};
