import "./Header.css";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";
import { useContext } from "react";

export const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <section>
      <header className="logo-header">
        <ForumOutlinedIcon fontSize="large" />
        <Link className="link" to={"/"}>
          <h1 id="title">NC News</h1>
        </Link>
        <nav className="navbar">
          <Link to={"/"}>
            <Button variant="text" size="large" sx={{ color: "black" }}>
              Articles
            </Button>
          </Link>
          <Link to={"/users"}>
            <Button variant="text" size="large" sx={{ color: "black" }}>
              Users
            </Button>
          </Link>
        </nav>
      </header>
      <Link className="link" to={"/users"}>
        <h3 id="user">You are signed in as {loggedInUser.username}</h3>
      </Link>
    </section>
  );
};
