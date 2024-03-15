import "./ArticleCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Link } from "react-router-dom";


export const ArticleCard = ({ article }) => {
  return (
    <>
    <section className="cards">
      <Card id="card" sx={{ width: 500 }}>
        <Link id="link" to={`/articles/${article.article_id}`}>
          <CardContent>
            <Typography gutterBottom variant="body" component="div">
              #{article.topic} | {article.created_at}
            </Typography>
            <CardMedia sx={{ height: 375 }} image={article.article_img_url} />
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="p" component="div">
              <FavoriteBorderIcon className="icon" /> {article.votes}
              <ModeCommentOutlinedIcon className="icon" />
              {article.comment_count}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </section>
    </>
  );
};
