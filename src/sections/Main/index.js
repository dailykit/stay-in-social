import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainWrapper } from "./styles";
import { Home, Experiences, Experts, Login, Signup } from "../../pages";

export default function Main() {
  return (
    <MainWrapper id="mainDiv">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experiences" component={Experiences} exact />
        <Route path="/experts" component={Experts} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </MainWrapper>
  );
}
