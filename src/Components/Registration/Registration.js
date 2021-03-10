/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

class RegistrationPage extends Component {
  state = {
    login: null,
    password: null,
    confirmPassword: null,
    err: false,
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onRegistration = (e) => {
    e.preventDefault();
    const { login, password, confirmPassword } = this.state;
    if (
      password === confirmPassword &&
      login &&
      localStorage.getItem("user") !== login
    ) {
      this.setState({ err: false });
      localStorage.setItem("user", login);
    } else {
      this.setState({ err: true });
    }
  };

  render() {
    return (
      <div className="form__wrapper">
        <h3 className="form__title">Sign Up</h3>
        <h2 className={this.state.err ? "show" : "hide"}>
          Check your data and try again
        </h2>
        <form action="submit" onSubmit={this.onRegistration}>
          <input
            type="text"
            name="login"
            className="form__input"
            placeholder="Login"
            onChange={this.onInputChange}
          />
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Password"
            onChange={this.onInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            className="form__input"
            placeholder="Confirm password"
            onChange={this.onInputChange}
          />
          <button type="submit" className="form__button">
            Sign Up
          </button>
        </form>
        <Link to="/" className="form__link">
          I have an account. Sign In
        </Link>
      </div>
    );
  }
}

export default RegistrationPage;
