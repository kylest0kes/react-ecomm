import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from './firebase/utils';

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
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        console.log(userAuth)
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      
      this.setState({
        ...initialState
      })
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser, displayName } = this.state

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <ViewAll currentUser={currentUser} displayName={displayName} />
            )}/>
            <Route path="/register" render={() => currentUser ? <Redirect to='/' /> : (
              <Register />
            )} />
            <Route path="/signin" render={() => currentUser ? <Redirect to='/' /> : (
              <SignIn />
            )}/>
            <Route path="/addsb" render={() => (
              <AddSB currentUser={currentUser} displayName={displayName} />
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
