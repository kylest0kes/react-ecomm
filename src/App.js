import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ViewAll from './pages/ViewAll';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/viewall">
            <ViewAll />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
