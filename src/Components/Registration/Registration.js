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
    existUser: false,
    success: false,
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
      localStorage.getItem("user") !== login &&
      localStorage.getItem(`psw${login}`) !== password
    ) {
      this.setState({ err: false, existUser: false, success: true });
      localStorage.setItem(`user${login}`, login);
      localStorage.setItem(`psw${login}`, password);
    } else if (
      localStorage.getItem(`user${login}`) === login &&
      localStorage.getItem(`psw${login}`) === password
    ) {
      this.setState({ err: false, existUser: true, success: false });
    } else {
      this.setState({ err: true, existUser: false, success: false });
    }
  };

  render() {
    return (
      <div className="form__wrapper">
        <h3 className="form__title">Sign Up</h3>
        {this.state.err && <h2>Check your data and try again</h2>}
        {this.state.existUser && <h2>Such user already exists</h2>}
        {this.state.success && <h2>Success!</h2>}

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
