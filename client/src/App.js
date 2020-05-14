import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
import TypingEffect from "./components/TypingEffect/TypingEffect.js";
// import Selection from "./components/Selection/Selection.js";
import Quote from "./components/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/MyNav.js";
import Gallery from "./pages/Gallery/Gallery.js";

function App() {
  return (
    <GlobalStateProvider>
      <Container fluid>
        <MyParallax />
        <TypingEffect />
        <Router>
          <NavBar />
          <Route exact path="/quote" component={Quote} />
          <Route exact path="/gallery" component={Gallery} />
          {/* <Selection /> */}
        </Router>
      </Container>
    </GlobalStateProvider>
  );
}

export default App;
