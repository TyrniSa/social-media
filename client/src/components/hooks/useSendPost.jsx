import { useMutation } from "react-query";

const SERVER_URL = "http://localhost:4000"

const useSendPost = () =>
  useMutation(post =>
    fetch(`${SERVER_URL}/new_post`, {
      body: JSON.stringify(post),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }),
    {
      onSuccess: () => {},
    }
  );

export default useSendPost;