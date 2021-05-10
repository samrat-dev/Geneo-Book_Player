import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";

import Book from "./containers/Book/Book";
import Practise from "./containers/Practise/Practise";
import { auth, createUserProfileDocument } from './containers/Practise/firebase/firebase.util';
import { setCurrentUser } from './containers/Practise/redux/user/user.actions';

import Header from "./containers/Practise/components/header/header";
import ReduxPractise from "./containers/ReduxPractise/ReduxPractise";
import ShopPage from "./containers/Practise/pages/shop/shop";
import SigninSignup from "./containers/Practise/pages/signin-signup/signin-signup";
import { selectCurrentUser } from "./containers/Practise/redux/user/user.selectors";
import CheckoutPage from './containers/Practise/pages/checkout/checkout';

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
        <Route path="/practise/shop" exact component={ShopPage} />
        <Route path="/practise/checkout" exact component={CheckoutPage} />
        <Route path="/practise/signin" exact
          render={() => this.props.currentUser ? (<Redirect to='/practise' />) : (<SigninSignup />)}
        />
      </Switch>
    </div>
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);