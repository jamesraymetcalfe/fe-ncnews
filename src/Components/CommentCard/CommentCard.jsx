import { DeleteComment } from "../DeleteComment/DeleteComment";
import "./CommentCard.css";


export const CommentCard = ({ comment, setCommentsList }) => {
  return (
    <li className="comment-card">
      <p id="author">
        {comment.author} - {comment.created_at}
      </p>
      <p>{comment.body}</p>
      <DeleteComment comment={comment} setCommentsList={setCommentsList}/>
    </li>
  );
};
