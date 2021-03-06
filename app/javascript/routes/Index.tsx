import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import EventView from "../components/Event";
import NewEvent from "../components/NewEvent";
import MyEvents from "../components/MyEvents";
import AllSubmitted from "../components/AllSubmitted";
import MyInterests from "../components/MyInterests";
import MyEventInterests from "../components/MyEventInterests";
import Reports from "../components/Reports";
import Report from "../components/Report";

export default (props: any) => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={(p: RouteComponentProps) => (
          <Events {...p} key={Math.random()} />
        )}
      />
      <Route
        path="/report/:id"
        exact
        render={(p: RouteComponentProps) => (
          <Report {...p} user_id={props.user_id} role={props.role} />
        )}
      />
      <Route
        path="/reports"
        exact
        render={(p: RouteComponentProps) => (
          <Reports
            {...p}
            key={Math.random()}
            user_id={props.user_id}
            role={props.role}
          />
        )}
      />
      <Route
        path="/interest/:id"
        exact
        render={(p: RouteComponentProps) => (
          <MyEventInterests {...p} user_id={props.user_id} role={props.role} />
        )}
      />
      <Route
        path="/my_interests"
        exact
        render={(p: RouteComponentProps) => (
          <MyInterests {...p} user_id={props.user_id} role={props.role} />
        )}
      />
      <Route
        path="/all_submitted"
        exact
        render={(p: RouteComponentProps) => (
          <AllSubmitted {...p} key={Math.random()} role={props.role} />
        )}
      />
      <Route
        path="/my_events"
        exact
        render={(p: RouteComponentProps) => (
          <MyEvents {...p} key={Math.random()} role={props.role} />
        )}
      />
      <Route
        path="/events"
        exact
        render={(p: RouteComponentProps) => (
          <Events {...p} key={Math.random()} />
        )}
      />
      <Route
        path="/event/:id"
        exact
        render={(p: RouteComponentProps) => (
          <EventView {...p} user_id={props.user_id} role={props.role} />
        )}
      />
      <Route
        path="/event"
        exact
        render={(p: RouteComponentProps) => (
          <NewEvent {...p} user_id={props.user_id} role={props.role} />
        )}
      />
    </Switch>
  </Router>
);
