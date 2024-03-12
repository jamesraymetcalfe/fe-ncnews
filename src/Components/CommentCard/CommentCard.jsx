import "./CommentCard.css";

export const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p id="author">
        {comment.author} - {comment.created_at}
      </p>
      <p>{comment.body}</p>
    </li>
  );
};
