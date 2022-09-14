import React from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./components/style.css";
import { Route, Switch } from "react-router-dom";
import ReadWelcome from "./components/ReadWelcome";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/Form";
import { useState } from "react";
import BooksContainer from "./components/BooksContainer";

function App() {
 
  return (
    <div class='container-fluid'>
      <NavBar />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/form'>
          <Form/>
        </Route>
        <Route exact path='/bookscontainer'>
          <BooksContainer />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
