import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyParallax from "./components/Parallax/MyParallax.js";
import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Selection from "./components/Selection/Selection.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Quote from "./components/Quote/Quote.js";
import Admin from "./pages/Admin/Admin.js";
import Gallery from "./pages/Gallery/Gallery.js";
import QuoteDetail from "./pages/Admin/QuoteDetails.js";
import { GlobalStateProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <GlobalStateProvider>
        <Container fluid className='m-0'>
          <MyParallax />
          {/* <TypingEffect /> */}
          {/* <About /> */}
          {/* <Selection /> */}
          {/* <Contact /> */}
          <Quote />
          <Switch>
            <Route exact path="/quotes">
              <Admin />
            </Route>
            <Route exact path="/books/:id">
              <QuoteDetail />
            </Route>
          </Switch>
          {/* <Gallery /> */}
        </Container>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
