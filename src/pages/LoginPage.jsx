import React from "react";
import LoginInput from "../components/LoginInput";
import { login } from "../api/network-data";
import PropTypes from "prop-types";

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <div className="note-app__body">
      <LoginInput login={onLoginHandler} />
    </div>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
