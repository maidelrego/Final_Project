import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
// import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Quote from "./components/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
// import Gallery from "./pages/Gallery";
import About from "./components/About/About.js";
import QuoteDetail from "./pages/Admin/QuoteDetails.js"     ;
// import Admin from "./pages/Admin/Admin";
// import Contact from "./pages/Contact Us";
import Login from "./components/Login/Login.js"
function Home() {
  return (
    <Container fluid>
      <MyParallax />
      <About />
      <Login />
      {/* <TypingEffect /> */}
      {/* <Admin /> */}
      {/* <QuoteDetails /> */}
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
        {/* <Route exact path="/gallery" component={Gallery} /> */}
        <Switch>
          {/* <Route exact path="/admin">
            <Admin />
          </Route> */}
          <Route exact path="/admin/:id">
            <QuoteDetail />
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
