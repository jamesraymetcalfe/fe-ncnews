import "./TopicsList.css";
import { useState, useEffect } from "react";
import { getTopics } from "../../api";
import { TopicCard } from "../TopicCard/TopicCard";
import { Loading } from "../Loading/Loading";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((data) => {
        setTopicsList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <ul className="topic-buttons">
      <li>
        <Link to={`/`}>
          <Button
            id="topic-button"
            variant="text"
            sx={{
              color: "black",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "gold" },
              textTransform: "initial",
            }}
          >
            #all
          </Button>
        </Link>
      </li>
      {topicsList.map((topic) => {
        return <TopicCard topic={topic} key={topic.slug} />;
      })}
    </ul>
  );
};
