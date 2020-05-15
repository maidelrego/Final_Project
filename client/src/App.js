import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Selection from "./components/Selection/Selection.js";
import Quote from "./components/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./pages/Gallery";
import About from "./pages/About Us";
import Contact from "./pages/Contact Us";

function Home() {
  return (
    <Container fluid>
      <MyParallax />
      <TypingEffect />
      <Selection />
    </Container>
  );
}

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
