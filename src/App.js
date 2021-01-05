import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from './firebase/utils';

// PAGES
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ViewAll from './pages/ViewAll';
import AddSB from './pages/AddSB';

// STYLE
import './style.css';

const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null; 

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) return;

      this.setState({
        currentUser: userAuth.displayName
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ViewAll currentUser={currentUser} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/addsb">
              <AddSB currentUser={currentUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
