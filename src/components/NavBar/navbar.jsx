import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navBarStyle.js";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CycloneIcon from "@mui/icons-material/Cyclone";
import FaceIcon from "@mui/icons-material/Face";

const NavBar = () => {
  const navigateToLogin = () => {
    window.location.href = "/login";
  };
  function navigateToSignUp() {
    window.location.href = "/signup";
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={Styles.appBarStyle}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={Styles.logoStyle}>
            Panacea
          </Typography>
          <Button sx={Styles.loginButtonStyle} onClick={() => navigateToLogin}>
            Log in
          </Button>
          <Button
            sx={Styles.defaultButtonStyle}
            onClick={() => navigateToSignUp}
          >
            Sign up
          </Button>
          {/* <Button color="primary">
              <FaceIcon />
              &nbsp;Logout
            </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
