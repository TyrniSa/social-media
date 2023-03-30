import { useInfiniteQuery } from "react-query";

const useMyPosts = () => {
  const SERVER_URL = "http://localhost:4000"
  return useInfiniteQuery("my_posts", async ({ pageParam = 0 }) => {
    const res = await fetch(`${SERVER_URL}/my_posts?cursor=${pageParam}`, {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Error in server")
    }
    return res.json();
  },
    {
      refetchInterval: 1000 * 10,
      getNextPageParam: lastPage =>
        lastPage.posts.length >= 5 ? lastPage.cursor : undefined
    }
  );
};

export default useMyPosts;