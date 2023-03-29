import { DesktopMenu, HamburgerButton, MobileMenu, StyledNav } from "./styled/Nav.styled.jsx";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/mythoughts.png"
import { StyledPostModalButton } from "./styled/PostModal.Styled.jsx";
import { Add } from "@mui/icons-material";

function Nav({ setModal }) {
  const [navOpen, setNav] = useState(false);

  return (
    <StyledNav>
      <HamburgerButton onClick={() => setNav(c => !c)}>
        <MenuIcon />
      </HamburgerButton>
      <MobileMenu open={navOpen}>
        <Links setNav={setNav} setModal={setModal} />
      </MobileMenu>

      <DesktopMenu>
        <Links setNav={null} setModal={setModal} />
      </DesktopMenu>
    </StyledNav>
  )
};

export default Nav;

const Links = ({ setNav, setModal }) => (
  <>
    <Link to="/" onClick={() => { if (setNav) setNav(false) }}>
      <img src={logo} alt="app logo" />
    </Link>
    <Link to="/" onClick={() => { if (setNav) setNav(false) }}>Feed</Link>
    <Link to="/account" onClick={() => { if (setNav) setNav(false) }}>Account</Link>
    <StyledPostModalButton onClick={() => {
      setModal(c => !c);
      if (setNav) setNav(false);
    }}><Add /></StyledPostModalButton>
  </>
);
