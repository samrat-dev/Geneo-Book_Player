import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";

import Book from "./containers/Book/Book";
import Practise from "./containers/Practise/Practise";
import { auth, createUserProfileDocument } from './containers/Practise/firebase/firebase.util';
import { setCurrentUser } from './containers/Practise/redux/user/user.actions';

import {
  PractiseLinks,
  PractiseRoutes,
} from "./containers/Practise/PractiseRoutes";
import Header from "./containers/Practise/components/header/header";
import ReduxPractise from "./containers/ReduxPractise/ReduxPractise";

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 2rem;
  color: #bbb2b2;
  text-shadow: 1px 2px 1px #03a9f4;
  flex-direction: column;
  a {
    font-size: 1rem;
    text-decoration: none;
    margin-right: 1rem;
  }
`;
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      }
      this.props.setCurrentUser(userAuth);
      // console.log(userAuth);
    });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth != null)
      this.unsubscribeFromAuth();
  }
  render() {
    return <div>
      <Route path="/" exact>
        <Welcome>
          <div>React practise</div>
          <div>
            <Link to="/practise">Practise</Link>
            <PractiseLinks />
            <Link to="/redux-practise">Redux-Practise</Link>
            <Link to="/books">Books</Link>
          </div>
        </Welcome>
      </Route>
      <Route path="/practise">
        <Header />
      </Route>
      <Switch>
        <Route path="/books" exact component={Book} />
        <Route path="/practise" exact component={Practise} />
        <Route path="/redux-practise" exact component={ReduxPractise} />
        <PractiseRoutes />
      </Switch>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Routes);