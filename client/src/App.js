import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from './components/Parallax/MyParallax.js';
import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Selection from './components/Selection/Selection.js';
import About from './components/About/About.js';
import Quote from './components/Quote/Quote.js';
import { GlobalStateProvider } from './utils/GlobalState'


function App() {
  return (
    <GlobalStateProvider>
      <Container fluid>
        <MyParallax />
        {/* <TypingEffect /> */}
        <About />
        {/* <Selection /> */}
        {/* <Quote /> */}
      </Container>
    </GlobalStateProvider>
  );
}

export default App;
