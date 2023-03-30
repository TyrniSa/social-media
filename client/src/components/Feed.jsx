import useFeed from "./hooks/useFeed";
import Post from "./Post";
import { StyledFeed, StyledLoadMoreButton } from "./styled/Feed.styled";

const Feed = () => {

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <StyledFeed>
      <h1>Recent thoughts</h1>
      {data?.pages?.map(page => page.posts.map(post => <Post post={post} key={post.id}/>))}
      <StyledLoadMoreButton>
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>Load More</button>
        )}
      </StyledLoadMoreButton>

    </StyledFeed>
  );
};

export default Feed;