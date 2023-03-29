import styled from "styled-components";

export const StyledPostModal = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-color: #48503f86;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPostModalForm = styled.form`
  width: 90%;
  max-width: 500px;
  min-width:200px;
  height: 50%;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.elevation_3};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  & > textarea {
    width: 90%;
    max-width: 400px;
    height: 50%;
    outline: 0;
    border: 0;
    border-radius: 5px;
    resize: none;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    background-color: #ecf1dd;
    ::-webkit-scrollbar {
    width: 0.8em;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(42, 48, 34, 0.3);
      border-radius:5%;
      background-color: ${({ theme }) => theme.elevation_2};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.elevation_1};
      border-radius:5%;
    }
  }
  & > button {
    font-family: "Montserrat Alternates", 'Roboto', 'Oxygen';
    color: white;
    background-color: ${({ theme }) => theme.elevation_2};
    outline: 0;
    border: 0;
    appearance: none;
    --webkit-appearance: none;
    --moz-appearance: none;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    transition: transform 150ms ease-in;
    
    &:hover{
      cursor: pointer;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const StyledPostModalHeader = styled.div``;

export const StyledPostModalButton = styled.i`
  z-index: 2;
  margin-top: auto;
  margin-inline: auto;
  padding: 0.5rem 1rem;
  font-size:2rem;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border-radius: 5px;
  border: 4px solid ${({ theme }) => theme.primary};
  @media (min-width: 600px) {
    margin-top: 0;
    margin-inline: 0;
    padding: 0.1rem 0.7rem;
    font-size: 2rem;
    &:hover {
      color: ${({ theme }) => theme.elevation_2};
      background-color: ${({ theme }) => theme.primary};
      transition: all 150ms ease-in;
    }
  }
`;