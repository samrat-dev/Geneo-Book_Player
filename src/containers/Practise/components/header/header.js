import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.util';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/practise">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/practise/shop">
          Shop
        </Link>
        <Link className="option" to="/practise/contact">
          Contact
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => { auth.signOut() }}>
              Sign Out
            </div>
            :
            <Link className="option" to="/practise/signin">
              Sign In
            </Link>
        }
        <CartIcon />
      </div>
      {
        hidden ?
          null :
          <CartDropdown />
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

