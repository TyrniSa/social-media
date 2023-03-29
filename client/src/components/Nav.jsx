import { DesktopMenu, HamburgerButton, MobileMenu, StyledNav } from "./styled/Nav.styled.jsx";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/mythoughts.png"

function Nav() {
  const [navOpen, setNav] = useState(false);

  return (
    <StyledNav>
      <HamburgerButton onClick={() => setNav(c => !c)}>
        <MenuIcon />
      </HamburgerButton>
      <MobileMenu open={navOpen}>
        <Link to="/" onClick={() => setNav(false)}>
          <img src={logo} alt="app logo" />
        </Link>
        <Link to="/" onClick={() => setNav(false)}><p>My feed</p></Link>
        <Link to="/account" onClick={() => setNav(false)}><p>Account</p></Link>
      </MobileMenu>

      <DesktopMenu>
        <Link to="/"><img src={logo} alt="app logo" /></Link>
        <Link to="/"><p>Feed</p></Link>
        <Link to="/account"><p>Account</p></Link>
      </DesktopMenu>
    </StyledNav>
  )
};

export default Nav;
