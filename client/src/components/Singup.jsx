import { StyledSignup, SignupButton } from "./styled/Signup.styled";
import { Google } from "@mui/icons-material";

const Singup = () => {
  const Signin = (e) => {
    e.preventDefault();
  };

  return (
    <StyledSignup>
      <form onSubmit={Signin}>
        <div>
          <h1>My thoughts...</h1>
          <sub>Social media app for your thoughts</sub>
        </div>
        <SignupButton >
          Sign in with Google <Google/>
        </SignupButton>
      </form>
    </StyledSignup>
  )
};

export default Singup;
