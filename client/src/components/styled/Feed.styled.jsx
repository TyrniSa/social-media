import styled from "styled-components";

export const StyledFeed = styled.div`
  min-height: 100vh;
  width: 90%;
  max-width: 600px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    text-align: center;
  }
`;

export const StyledUser = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  & > img {
    width: 100px;
    border-radius: 50%;
  }
`;

export const StyledPost = styled.div`
  background-color: ${({ theme }) => theme.elevation_1};
  padding: 1rem 2rem;
  border-radius: 10px;
  & > p {
    margin-top: 1rem;
    padding-bottom: 1rem;
    text-align: justify;
  }
`;

export const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.3rem;
  border-bottom: 2px dotted gray;
  & > img {
    width: 60px;
    border-radius: 50%;
  }
`;

export const StyledLoadMoreButton = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  margin: 0.1rem auto 1rem;
  padding: 0.5rem 1rem;
  & > button {
    font-size: 1.2rem;
    border-radius: 10px;
    font-family: "Montserrat Alternates", 'Roboto', 'Oxygen';
    width: 100%;
    height: 100%;
    color: white;
    border: 0;
    outline: none;
    background-color: ${({ theme }) => theme.elevation_2};
    &:active {
      transform: scale(0.98);
    }
    &:focus,
    &:hover{
    transition:all 0.5s ease;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    border: 0;
    outline: none;
    background-color: ${({ theme }) => theme.elevation_1};
    }
  }
`;
