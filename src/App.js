import React from "react";

import './App.css';
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import Content from "./content";
import Bar from "./Bar";

function App() {
  return (
      <>
    <div className="App">
        <Header/>
        <Menu/>
        <Bar/>
        <Content/>
        <Footer/>
    </div>
      </>
  );
}

export default App;
