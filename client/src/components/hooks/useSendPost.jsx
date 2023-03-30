import { useMutation, useQueryClient } from "react-query";

const SERVER_URL = "http://localhost:4000"

const useSendPost = () => {
  const queryClient = useQueryClient();
  return useMutation(post =>
    fetch(`${SERVER_URL}/new_post`, {
      body: JSON.stringify(post),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }),
    {
      onSuccess: () => {
        queryClient.refetchQueries("feed");
        queryClient.refetchQueries("my_posts")
      },
    }
  );
}

export default useSendPost;