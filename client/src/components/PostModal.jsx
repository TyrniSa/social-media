import { useRef, useState } from "react";
import { StyledPostModal, StyledPostModalForm, StyledPostModalHeader } from "./styled/PostModal.Styled";
import useSendPost from "./hooks/useSendPost";

function PostModal({ setModal }) {
  const [value, setValue] = useState({ post: "" });
  const backgroundRef = useRef();
  const { mutate: sendPost } = useSendPost();

  return (
    <StyledPostModal
      ref={backgroundRef}
      onClick={e => {
        if (e.target === backgroundRef.current) setModal(false);
      }}
    >
      <StyledPostModalForm
        onSubmit={e => {
          e.preventDefault();
          const postText = value.post;
          if (postText.length > 0) {
            // send post to api
            sendPost({ post: postText });
          }
          setValue({ post: "" });
          setModal(false);
        }}
      >
        <StyledPostModalHeader>
          What are you thinking?
        </StyledPostModalHeader>
        <textarea
          name="post"
          value={value.post}
          onChange={e => setValue({ [e.target.name]: e.target.value })}
          maxLength="500"
        />
        {value.post.length > 450 && <sub>Characters Left: {500 - value.post.length}</sub>}
        <button type="submit">
          <p>Submit New Post</p>
        </button>
      </StyledPostModalForm>
    </StyledPostModal>
  )
};

export default PostModal;
