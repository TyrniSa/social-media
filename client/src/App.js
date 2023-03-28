import StyledApp from "./components/styled/App.styled"
import GlobalStyle from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import Singup from "./components/Singup";
import { useContext } from "react";
import { UserContext } from "./components/UserContext";

function App() {

  const user = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {
            user?.loggedIn === true ? "logged in" :
            <Singup />
          }
            
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
