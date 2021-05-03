import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import "./sign-up.scss";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password != confirmPassword) {
      alert('Password don\'t match'); return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: "",
        password: "",
        confirmPassword: "",
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-in sign-up">
        <h2>I do not have an account</h2>
        <span> Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
