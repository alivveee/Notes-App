import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useLang } from "../context/LangContext";

const RegisterInput = ({ register }) => {
  const [name, handleNameChange] = useInput();
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();
  const [confirmPassword, handleConfirmPasswordChange] = useInput();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { lang } = useLang();

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password });
  };

  return (
    <div className="note-login-register">
      <h2>{lang === "en" ? "Fill the form to register account." : "Isi form untuk mendaftar akun."}</h2>
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Jhon Snow" value={name} onChange={handleNameChange} required />
        <input type="email" placeholder="jhonsnow@email.com" value={email} onChange={handleEmailChange} required />
        {password.length < 6 && password && <p style={{ color: "red" }}>{lang === "en" ? "Password at least 6 characters" : "Password setidaknya 6 karakter"}</p>}
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required />
        {!passwordMatch && confirmPassword && <p style={{ color: "red" }}>{lang === "en" ? "Password do not match" : "Password tidak sama"}</p>}
        <input type="password" placeholder={lang === "en" ? "confirm password" : "konfirmasi password"} value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        <button disabled={!passwordMatch}>Register</button>
      </form>
      <p>
        {lang === "en" ? "Already have an account? " : "Sudah punya akun? "} <Link to="/">{lang === "en" ? "Login here" : "Login disini"}</Link>
      </p>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
