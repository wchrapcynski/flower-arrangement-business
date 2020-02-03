import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route path='/' exact component={HomePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
