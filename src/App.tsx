import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import About from "./components/About";
import { Post } from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/post/:id" exact component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
