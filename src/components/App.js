import React from "react";
import Home from "./Home"
// import Main from "./components/Main";
import NavBar from "./NavBar";
// import "./style.css";
import { Route, Switch } from "react-router-dom";
// import ReadWelcome from "./components/ReadWelcome";
import About from "./About";
// import Home from "../../public/Home";
import Form from "./Form";
import { useState } from "react";
import BooksContainer from "./BooksContainer";

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
