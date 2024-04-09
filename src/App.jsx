import "./App.css";
import { ArticlesList } from "./Components/ArticlesList/ArticlesList";
import { Header } from "./Components/Header/Header";
import { UsersList } from "./Components/UsersList/UsersList";
import { Routes, Route } from "react-router-dom";
import { SingleArticle } from "./Components/SingleArticle/SingleArticle";
import { UserProvider } from "./Context/User";
import { TopicFilter } from "./Components/TopicFilter/TopicFilter";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<UsersList set />} />
        <Route path="/articles/topic/:topic" element={<TopicFilter />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
