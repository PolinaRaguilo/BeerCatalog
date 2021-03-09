/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { isLogged } from "../../Redux/actions/authAction";
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
  };

  onLogin = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    if (login === "12" && password === "123") {
      this.props.onLogin(true);
    }
  };

  render() {
    if (this.props.isLogIn) {
      return <Redirect to="/beer" />;
    }
    return (
      <div className="form__wrapper">
        <h3 className="form__title">Login</h3>
        <form action="submit" onSubmit={this.onLogin}>
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

const mapStateToProps = (state) => {
  return {
    isLogIn: state.authReducer.isLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (isLog) => dispatch(isLogged(isLog)),
  };
};

Authorization.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLogIn: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
