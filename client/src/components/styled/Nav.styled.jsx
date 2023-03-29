import styled from "styled-components";

export const StyledNav = styled.div`
`;

export const HamburgerButton = styled.div`
position: absolute;
top:0;
left:0;
margin: 1rem;
font-size: 2.1rem;
z-index: 2;
@media(min-width: 600px) {
display: none;
}
`;

export const MobileMenu = styled.nav`
display: flex;
background-color: ${({ theme }) => theme.elevation_1};
position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 35%;
min-width: 100px;
flex-direction:column;
padding: 4rem 0.5rem;
gap: 1rem;
text-align:center;
font-size:1.2rem;
font-weight:500;
transform: ${({ open }) => open ? "translateX(0%);" : "translateX(-100%);"};
transition: transform 150ms ease-in;
img{
    width: 90%;
    border-radius: 10px;
    opacity: 0.8;
};
a{
  color: #dfebd2;
};
@media(min-width: 600px) {
display: none;
};
`;

export const DesktopMenu = styled.nav`
display: flex;
background-color: ${({ theme }) => theme.elevation_1};
align-items: center;
padding: 0.5rem 1rem;
max-width: 100%;
height: 15%;
gap: 3rem;
font-size: 1.5rem;
img{
  margin-top: 5px;
  margin-left: 5px;
  width: 40%;
  border-radius: 10px;
  opacity: 0.8;
};
a:first-child {
    margin-right: auto;
  }
a {
  text-decoration: none;
  color: #dfebd2;
  &:hover {
    color: #abb988;
  }
};
@media(max-width: 600px) {
display: none;
};
`;