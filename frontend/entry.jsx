import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, Redirect, HashRouter } from "react-router-dom";

import Index from './components/index_folder/index';
import Subreddit from './components/subreddit_folder/subreddit';
import Searchbar from "./components/searchbar/searchbar";
import Error from "./components/error/error";
import Search from "./components/Search/search";



const Root = () => (
  <HashRouter>
    <div className="parent-container">
      <Link className="Title" to={"/"}>
        <img
          className="logo"
          src={"https://static.tvtropes.org/pmwiki/pub/images/bowser2.png"}
        />
        <div className="appname">Reddit B(r)owser</div>
      </Link>
      <Searchbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/search/:topic" component={Search} />
        <Route exact path="/subreddit//r/:subreddit" component={Subreddit} />
        <Route exact path="/error" component={Error} />
      </Switch>
    </div>
  </HashRouter>
);



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root />, root);
});