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
import QuoteDetail from "./pages/Quote/QuoteDetails.js";
import Admin from "./pages/Admin/Admin";
import SignIn from "./pages/SignIn/SignIn.js"
// import IsAuthenticatedRoute from "./components/Auth/isAuthenticatedRoute";
// import UnAuthenticatedRoute from "./components/Auth/unAuthenticatedRoute";
// import Contact from "./pages/Contact Us";

function Home() {
  return (
    <Container fluid>
      <MyParallax />
      <About />
      {/* <TypingEffect /> */}
      {/* <QuoteDetails /> */}

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
          {/* <Route exact path="/thankyou" component={Display} /> */}
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/login" component={SignIn} />
          {/* <IsAuthenticatedRoute> */}
            <Route exact path="/admin">

              <Admin />
            </Route>
            <Route exact path="/admin/:id">
              <QuoteDetail />
            </Route>
          {/* </IsAuthenticatedRoute> */}
          <Route>

            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>




    // <GlobalStateProvider>
    //   <Router>
    //     <NavBar />
    //     <UnAuthenticatedRoute exact path="/" component={Home} />
    //     <UnAuthenticatedRoute exact path="/quote" component={Quote} />
    //     <UnAuthenticatedRoute exact path="/gallery" component={Gallery} />
    //     <UnAuthenticatedRoute exact path="/login" component={SignIn} />
    //     <IsAuthenticatedRoute path='/admin' component={Admin} />

    //     <Switch >



    //       <IsAuthenticatedRoute exact path="/admin/:id">
    //         <QuoteDetail />
    //       </IsAuthenticatedRoute>
    //     </Switch>
    //   </Router>
    // </GlobalStateProvider>
  );
}

export default App;
