import React from "react";
import "./CommentWrapper.css";

function CommentWrapper(props) {
  const classes = props.className + " wrapper"; //comment-first wrapper
  return <div className={classes}>{props.children}</div>;
}

export default CommentWrapper;
// 
