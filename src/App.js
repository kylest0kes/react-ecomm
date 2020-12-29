import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import ViewAll from './pages/ViewAll';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/viewall">
            <ViewAll />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
