import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "./../form-input/form-input";
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import "./sign-in.scss";

// import _ from "lodash";
// const log = console.log;

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }

  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
