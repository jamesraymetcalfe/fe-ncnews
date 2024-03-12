import "./ArticleCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const ArticleCard = ({ article }) => {
  return (
    <section className="cards">
      <Card sx={{ width: 500 }}>
        <CardContent>
          <Typography gutterBottom variant="body" component="div">
            #{article.topic}
          </Typography>
          <CardMedia sx={{ height: 375 }} image={article.article_img_url} />
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>

          <Typography variant="p" component="div">
            <FavoriteBorderIcon className="icon" /> {article.votes}
            <ModeCommentOutlinedIcon className="icon" /> {article.comment_count}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};
