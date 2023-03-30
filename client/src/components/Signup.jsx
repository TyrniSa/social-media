import { StyledSignup, SignupButton } from "./styled/Signup.styled";
import { Google } from "@mui/icons-material";
import logo from "../img/mythoughts.png"

const Signup = () => {
  const SERVER_URL = "http://localhost:4000"
  const Signin = (e) => {
    e.preventDefault();
    const str = `${SERVER_URL}/auth/google`;
    window.open(str, "_self");
  };

  return (
    <StyledSignup>
      <form onSubmit={Signin} data-prompt="select_account">
        <div>
          <img src={logo} alt="app logo" /><br />
          <sub>Social media app for your thoughts</sub>
        </div>
        <SignupButton >
          Sign in with Google <Google />
        </SignupButton>
      </form>
    </StyledSignup>
  )
};

export default Signup;
