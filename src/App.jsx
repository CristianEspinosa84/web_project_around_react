import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import "../src/Pages/index.css";

function App() {
  return (
    <div className="page">
      <div class="overlay"></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
