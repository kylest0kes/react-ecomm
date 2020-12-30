import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ViewAll from './pages/ViewAll';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ViewAll />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
