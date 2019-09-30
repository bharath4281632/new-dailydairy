import React, { Component } from "react";

import { connect } from "react-redux";
// import {
//   LOGIN_ANONYMOUSLY,
//   LOGIN_WITH_GMAIL,
//   SET_CURRENT_USER
// } from "../../utils/actions/const";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

import "./loginpage.style.scss";
const styles = {
  label: {
    textTransform: "none",
    width: 190,
    background: "#2680EB",
    "&:hover": {
      background: "#2680EB"
    }
  }
};

class Login extends Component {
  googleLogin = () => {
    this.props.loginWithGmail(this.props);
  };
  anonymousLogin = () => {
    this.props.loginAnonymously(this.props);
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="home">
        <Typography variant="h1" component="h2" id="title-home">
          <div>
            Da<span className="upper">iry</span>
            <span className="lower">Daily</span>
          </div>
        </Typography>
        <div id="login-area-home">
          <Button
            color="primary"
            variant="contained"
            classes={{
              containedPrimary: classes.label,
              colorInherit: classes.label
            }}
            id="login-home"
            onClick={this.googleLogin}
          >
            Login with Google
          </Button>
          <div id="or-home">
            <Divider></Divider>
            <Typography variant="body1">Or</Typography>
            <Divider></Divider>
          </div>
          <div id="later-home">
            <Button variant="text" onClick={this.anonymousLogin}>
              Sign-In Later
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     loginWithGmail: props => dispatch({ type: LOGIN_WITH_GMAIL, props }),
//     loginAnonymously: props => dispatch({ type: LOGIN_ANONYMOUSLY, props }),
//     setCurrentUser: userInfo => dispatch({ type: SET_CURRENT_USER, userInfo })
//   };
// };
const loginStyle = withStyles(styles)(Login);
// export default connect(
//   null
//     mapDispatchToProps
// )(loginStyle);
export default loginStyle;
