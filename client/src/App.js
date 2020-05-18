import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
// import TypingEffect from "./components/TypingEffect/TypingEffect.js";
import Quote from "./components/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as
Router,
Route,
Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
// import Gallery from "./pages/Gallery";
import About from "./components/About/About.js";
import QuoteDetail from "./pages/Admin/QuoteDetails.js";
import Admin from "./pages/Admin/Admin";
// import Contact from "./pages/Contact Us";
import SignIn from "./pages/SignIn/SignIn.js";


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

function Home() {
  return (
    <Container fluid>
      <MyParallax />
      <About />
      <button><a href="/login">Sign In</a></button>
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
        <Route exact path="/login" component={SignIn} />
        <Route path='/admin' component={Admin} />
        <Switch>
          <Route exact path="/admin/:id">
            <QuoteDetail />
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
