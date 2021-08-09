import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";
import Category from "./Pages/Category";
import Item from "./Pages/Item";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Category" exact component={Category} />
        <Route path="/Item" exact component={Item} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
