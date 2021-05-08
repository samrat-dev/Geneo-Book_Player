import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

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

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);

