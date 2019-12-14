import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <MovieList />
          </Route>
          <Route path="/detay">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
