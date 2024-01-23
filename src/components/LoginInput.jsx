import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useLang } from "../context/LangContext";

const LoginInput = ({ login }) => {
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();
  const { lang } = useLang();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };
  return (
    <div className="note-login-register">
      <h2> {lang === "en" ? "Login to use app, please." : "Yuk, login untuk menggunakan aplikasi."}</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <input type="email" placeholder="jhonsnow@email.com" value={email} onChange={handleEmailChange} required />
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required />
        <button>Login</button>
      </form>
      <p>
        {lang === "en" ? "Don't have an account? " : "Belum punya akun? "}
        <Link to="/register">{lang === "en" ? "Register here" : "Daftar disini"}</Link>{" "}
      </p>
    </div>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
