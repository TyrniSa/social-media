import StyledApp from "./components/styled/App.styled"
import GlobalStyle from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import { useContext } from "react";
import { UserContext } from "./components/UserContext";
import SignedInApp from "./components/SignedInApp";

function App() {

  const user = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
        {user?.loggedIn === null ? (
            ""
          ) : user?.loggedIn === true ? (
            <SignedInApp />
          ) : (
            <Signup />
          )}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
