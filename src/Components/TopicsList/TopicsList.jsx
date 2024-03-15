import "./TopicsList.css";
import { useState, useEffect } from "react";
import { getTopics } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import { TopicCard } from "../TopicCard/TopicCard";

export const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    getTopics().then((data) => {
      setTopicsList(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <ul>
      {topicsList.map((topic) => {
        return <TopicCard topic={topic} key={topic.slug} />;
      })}
    </ul>
  );
};
