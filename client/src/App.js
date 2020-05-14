import React from "react";
import { BrowserRouter as Router,
  Switch,
  Link,
   Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import Login from './components/Login/Login.js'
import Dashboard from "./pages/Dashboard.js";
function App() {

  return (
    <Router>

        <Header></Header>
<Link to="/login"><button>Login</button></Link>
        <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
    </Router>

  );
}

export default App;
