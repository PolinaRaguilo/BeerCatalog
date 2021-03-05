/* eslint-disable arrow-parens */
import { Link } from "@material-ui/core";
import React, { Component } from "react";
import "./authorization.css";

class Authorization extends Component {
  state = {
    login: "",
    password: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="form__wrapper">
        <h3 className="form__title">Login</h3>
        <form action="submit">
          <input
            name="login"
            className="form__input"
            placeholder="Login"
            onChange={this.onInputChange}
          />
          <input
            name="password"
            className="form__input"
            placeholder="Password"
            onChange={this.onInputChange}
          />
          <button type="submit" className="form__button">
            Login
          </button>
        </form>
        <Link to="/registration" className="form__link">
          Don&#039;t have an account? Sign Up
        </Link>
      </div>
    );
  }
}

export default Authorization;
