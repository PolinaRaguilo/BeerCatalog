import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegistrationPage extends Component {
  render() {
    return (
      <div className="form__wrapper">
        <h3 className="form__title">Sign Up</h3>
        <form action="submit">
          <input
            type="text"
            name="newLogin"
            className="form__input"
            placeholder="Login"
          />
          <input
            type="password"
            name="newPassword"
            className="form__input"
            placeholder="Password"
          />
          <input
            type="password"
            name="copyNewPassword"
            className="form__input"
            placeholder="Confirm password"
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
