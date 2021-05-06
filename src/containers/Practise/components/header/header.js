import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

function Header({ currentUser }) {
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
      </div>
    </div>
  ); 
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
