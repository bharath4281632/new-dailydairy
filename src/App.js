import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./pages/mainpage/mainpage.component";
import LoginPage from "./pages/loginpage/loginpage.component";
import NotFoundPage from "./pages/notfoundpage/notfoundpage.component";

import ProtectedRoute from "./services/protectedRoute.service";
import DesktopPage from "./pages/desktoppage/desktoppage.component";
// import { connect } from "react-redux";
// import { SET_CURRENT_USER } from "./utils/actions/const";

const App = props => {
  const [width, setWidth] = useState(0);

  //updates the width of the window
  useEffect(() => {
    setWidth(window.innerWidth);
    // props.setCurrentUser();
    const updateWindowDimensions = e => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [props]);

  return (
    <BrowserRouter>
      <div style={{ height: "100%" }}>
        {width <= 420 ? (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute path="/console" component={MainPage} />
            <Redirect exact={true} from="/" to="/console/cart" />
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        ) : (
          <DesktopPage></DesktopPage>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
