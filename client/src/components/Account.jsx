
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
        <StyledLoadMoreButton>
          <form action="http://localhost:4000/logout" method="post">
							<button className="logout" type="submit">Log out</button>
							<input type="hidden" name="_csrf" value="<%= csrfToken %>" />
						</form>
        </StyledLoadMoreButton>
      </StyledUser>
        <h1>My thoughts</h1>
        {data?.pages?.map(page => page.posts.map(post => <Post post={post} key={post.id}/>))}
        <StyledLoadMoreButton>
          {hasNextPage && !isFetchingNextPage && (
            <button onClick={() => fetchNextPage()}>Load More</button>
          )}
        </StyledLoadMoreButton>
      </StyledFeed>
  )
}

export default Account
