import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainWrapper } from "./styles";
import {
  Home,
  Experiences,
  Experts,
  Login,
  Signup,
  CategoryTag,
  Expert,
  Experience,
  Booking,
  Invite,
  InvitePoll,
  SendPoll,
} from "../../pages";

export default function Main() {
  return (
    <MainWrapper id="mainDiv">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experiences" component={Experiences} exact />
        <Route path="/experiences/:experienceId" component={Experience} exact />
        <Route path="/experts" component={Experts} exact />
        <Route path="/experts/:expertId" component={Expert} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/categoryTag" component={CategoryTag} exact />
        <Route path="/booking" component={Booking} exact />
        <Route path="/invite" component={Invite} exact />
        <Route path="/invitePoll" component={InvitePoll} exact />
        <Route path="/sendpoll" component={SendPoll} exact />
      </Switch>
    </MainWrapper>
  );
}
