import { useEffect, useState } from "react";
import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import Button from "@mui/material/Button";
import { CommentsList } from "../CommentsList/CommentsList";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((data) => {
      setSingleArticle(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <CircularProgress sx={{ color: "gold" }} />;
  }
  return (
    <section className="card">
      <Card sx={{ width: 500 }}>
        <CardHeader
          title={singleArticle.title}
          subheader={singleArticle.created_at}
        />
        <CardMedia
          component="img"
          sx={{ height: 375 }}
          image={singleArticle.article_img_url}
          alt="Paella dish"
        />
        <Typography variant="body" sx={{ marginBottom: "1em" }}>
          {singleArticle.body}
        </Typography>
        <section className="card">
          <IconButton aria-label="up vote comment" sx={{ color: "black" }}>
            <ThumbUpAltOutlinedIcon />
          </IconButton>
          <IconButton aria-label="down vote article" sx={{ color: "black" }}>
            <ThumbDownAltOutlinedIcon />
          </IconButton>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderColor: "black",
              marginLeft: "5px",
              "&:hover": { backgroundColor: "gold" },
            }}
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            {showComments ? "Hide Comments" : "View Comments"}
          </Button>
        </section>
        {showComments ? <CommentsList article_id={article_id} /> : null}
      </Card>
    </section>
  );
};
