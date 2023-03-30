import useMyPosts from "./hooks/useMyPosts";
import Post from "./Post";
import { StyledFeed, StyledLoadMoreButton, StyledUser } from "./styled/Feed.styled";

function Account() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useMyPosts();
  return (
      <StyledFeed>
        <StyledUser>
        <img src={data?.pages[0]?.posts[0].img} alt="profile"/>
        {data?.pages[0]?.posts[0].username}
        {/* <StyledLoadMoreButton>
          <button>Log out</button>
        </StyledLoadMoreButton> */}
      </StyledUser>
        <h1>My thoughts</h1>
        {data?.pages?.map(page => page.posts.map(post => <Post post={post} />))}
        <StyledLoadMoreButton>
          {hasNextPage && !isFetchingNextPage && (
            <button onClick={() => fetchNextPage()}>Load More</button>
          )}
        </StyledLoadMoreButton>
      </StyledFeed>
  )
}

export default Account
