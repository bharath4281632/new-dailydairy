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
import {
  loginWithGmail,
  currentUser,
  loginAnonymously
} from "../../firebase/auth.firebase";
import { setCurrentUser } from "../../redux/user/user.actions";
import { checkAnonymously } from "../../services/userAuth.service";
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
  componentDidMount() {}
  login = async () => {
    try {
      const resp = await loginWithGmail();
      const userToken = await resp.user.getIdToken();
      localStorage.setItem("token", userToken);
      const userInfo = currentUser();
      this.props.setCurrentUser(userInfo);
      this.props.setAnonymous(checkAnonymously(userInfo));
    } catch (ex) {
      console.log(ex.message);
    }
  };
  anonymously = async () => {
    try {
      const resp = await loginAnonymously();
      const userToken = await resp.user.getIdToken();
      localStorage.setItem("token", userToken);
      const userInfo = currentUser();
      this.props.setCurrentUser(userInfo);
    } catch (ex) {
      console.log(ex.message);
    }
  };
  googleLogin = () => {
    this.login().then(() => this.props.history.replace("/console/cart"));
    // this.props.loginWithGmail(this.props);
  };
  anonymousLogin = () => {
    this.anonymously().then(() => this.props.history.replace("/console/cart"));
    // this.props.loginAnonymously(this.props);
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="home">
        <Typography variant="h1" component="h2" className="title-home">
          <div>
            Da<span className="upper">iry</span>
            <span className="lower">Daily</span>
          </div>
        </Typography>
        <div className="login-area-home">
          <Button
            color="primary"
            variant="contained"
            classes={{
              containedPrimary: classes.label
              // colorInherit: classes.label
            }}
            onClick={this.googleLogin}
          >
            Login with Google
          </Button>
          <div className="or-home">
            <Divider></Divider>
            <Typography variant="body1">Or</Typography>
            <Divider></Divider>
          </div>
          <div className="later-home">
            <Button variant="text" onClick={this.anonymousLogin}>
              Sign-In Later
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginWithGmail: props => dispatch({ type: "LOGIN_WITH_GMAIL", props }),
    loginAnonymously: props => dispatch({ type: "LOGIN_ANONYMOUSLY", props }),
    setCurrentUser: userInfo => dispatch(setCurrentUser(userInfo))
  };
};
const loginStyle = withStyles(styles)(Login);
export default connect(
  null,
  mapDispatchToProps
)(loginStyle);
// export default connect()loginStyle;
