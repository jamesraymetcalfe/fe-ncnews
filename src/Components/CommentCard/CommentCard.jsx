import { DeleteComment } from "../DeleteComment/DeleteComment";
import "./CommentCard.css";


export const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p id="author">
        {comment.author} - {comment.created_at}
      </p>
      <p>{comment.body}</p>
      <DeleteComment comment_id={comment.comment_id} />
    </li>
  );
};
