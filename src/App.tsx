import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import About from "./components/About";
import { Post } from "./components/Post";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
