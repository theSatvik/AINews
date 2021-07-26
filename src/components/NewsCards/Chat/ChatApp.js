import React, { useState } from "react";
import "./ChatApp.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "../../../StateProvider";

function ChatApp() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="ChatApp">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* SIDEBAR */}
          {/* <Router>
  <Switch>
    <Route path="/ChatApp"> */}
          <Sidebar />
          <Chat />
          {/* </Route>
    <Route path="///">
      <h1>Home Screen</h1>
    </Route>
  </Switch>
</Router> */}
        </div>
      )}
    </div>
  );
}

export default ChatApp;
