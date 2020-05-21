import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";

// import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Quote from "./pages/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Gallery from "./pages/Gallery";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Display from "./components/Alert/Alert.js";
import QuoteDetail from "./pages/Quote/QuoteDetails.js";
import Admin from "./pages/Admin/Admin";

// import IsAuthenticatedRoute from "./components/Auth/isAuthenticatedRoute";
// import UnAuthenticatedRoute from "./components/Auth/unAuthenticatedRoute";

import NoMatch from "./pages/NoMatch/NoMatch.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Footer from "./components/Footer/Footer.js";
// import Contact from "./pages/Contact Us";

function Home() {
  return (
    <Container fluid className="p-0">
      <MyParallax />
      <About />
      <Contact />
      {/* <TypingEffect /> */}

      {/* <QuoteDetails /> */}

      {/* <SignIn /> */}
      {/* <Admin /> */}
      <Footer />
    </Container>
  );
}

function App() {
  return (


    <GlobalStateProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/#about" component={Home} />
          <Route exact path="/#contact" component={Home} />
          <Route exact path="/quote" component={Quote} />
          <Route exact path="/thankyou" component={Display} />
          <Route exact path="/gallery" component={Gallery} />

          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/admin/:id">
            <QuoteDetail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
