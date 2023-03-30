import React from "react";
import { StyledLoadMoreButton, StyledPost, StyledPostHeader } from "./styled/Feed.styled";

const Post = React.memo(({ post }) => {
  return (
    <StyledPost>
      <StyledPostHeader>
        <h2>{post.username}</h2>
        <img src={post.img} alt="profile img" />
      </StyledPostHeader>
      <p>{post.body}</p>
      {/* <StyledLoadMoreButton><button>Edit post</button></StyledLoadMoreButton> */}
    </StyledPost>
    
  );
});

export default Post;