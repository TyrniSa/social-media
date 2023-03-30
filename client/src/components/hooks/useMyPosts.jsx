import { useInfiniteQuery } from "react-query";

const useMyPosts = (path = "my_posts") => {
  const SERVER_URL = "http://localhost:4000"
  return useInfiniteQuery(`${path}`, async ({ pageParam = 0 }) => {
    const res = await fetch(`${SERVER_URL}/${path}?cursor=${pageParam}`, {
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