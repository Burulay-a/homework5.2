import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment(props) {
  return (
    <div  className="commentTop">
      {props.data.map((el) => {
        return (
          <div key ={el.id}>
          <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={el.author.avatarUrl}
          name={el.author.name}
        />

        
      </CommentWrapper>
      <CommentWrapper className= 'comment'>{el.text}<CommentDate date={el.date} /></CommentWrapper>
      
      </div>


        )
      })}
      
    </div>
  );
}
export default Comment;
