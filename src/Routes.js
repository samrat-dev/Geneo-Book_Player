import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

import Book from "./containers/Book/Book";
import Practise from "./containers/Practise/Practise";
import { auth, createUserProfileDocument } from './containers/Practise/firebase/firebase.util';

import {
  PractiseLinks,
  PractiseRoutes,
} from "./containers/Practise/PractiseRoutes";
import Header from "./containers/Practise/components/header/header";

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
export default class Routes extends React.Component {
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
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
          //  console.log(this.state);
          });
        });

      }
      this.setState({ currentUser: userAuth });
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
            <Link to="/books">Books</Link>
          </div>
        </Welcome>
      </Route>
      <Route path="/practise">
        <Header currentUser={this.state.currentUser} />
      </Route>
      <Switch>
        <Route path="/books" exact component={Book} />
        <Route path="/practise" exact component={Practise} />
        <PractiseRoutes />
      </Switch>
    </div>
  }
}

