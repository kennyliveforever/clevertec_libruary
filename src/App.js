import './App.css';
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import React from "react";

function App() {
  return (
      <>
    <div className="App">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
      </>
  );
}

export default App;
