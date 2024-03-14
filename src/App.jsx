import "./App.css";
import { ArticlesList } from "./Components/ArticlesList/ArticlesList";
import { Header } from "./Components/Header/Header";
import { Users } from "./Components/Users/Users";
import { Routes, Route } from "react-router-dom";
import { SingleArticle } from "./Components/SingleArticle/SingleArticle";
import { UserProvider } from "./Context/User";
import { TopicFilter } from "./Components/TopicFilter/TopicFilter";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/topic/:topic" element={<TopicFilter />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
