import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Selection from "./components/Selection/Selection.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Quote from "./components/Quote/Quote.js";
import Admin from "./pages/Admin/Admin.js";
import Gallery from "./pages/Gallery/Gallery.js";
import { GlobalStateProvider } from "./utils/GlobalState";


function App() {
  return (
    <GlobalStateProvider>
      <Container fluid className='m-0'>
        <MyParallax />
        {/* <TypingEffect /> */}
        {/* <About />
        <Selection />
        <Contact /> */}
        {/* <Quote />
        <Admin /> */}
        <Gallery />
      </Container>
    </GlobalStateProvider>
  );
}

export default App;
