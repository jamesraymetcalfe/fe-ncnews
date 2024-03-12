import "./App.css";
import { useState } from "react";
import { ArticlesList } from "./Components/ArticlesList/ArticlesList";
import { Header } from "./Components/Header/Header";
import { Users } from "./Components/Users/Users";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Context/User";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <UserContext.Provider
      value={{ loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
