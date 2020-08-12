import React from "react";
import { Box, Grommet } from "grommet";
import LoginForm from "../components/LoginForm/loginForm";

function Login() {
  return (
    <Grommet>
      <Box>
        <Box>
          <LoginForm></LoginForm>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;

