import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      comfirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, comfirmPassword } = this.state;
    console.log(password, comfirmPassword);
    if (password !== comfirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, comfirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            onChange={this.handleChange}
            name="displayName"
            label="Display Name"
          />
          <FormInput
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
            label="Email"
          />
          <FormInput
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
            label="Password"
          />
          <FormInput
            type="password"
            value={comfirmPassword}
            onChange={this.handleChange}
            name="comfirmPassword"
            label="Comfirm Password"
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
