import React from "react";
import RegisterInput from "../components/RegisterInput";
import { useNavigate } from "react-router-dom";
import { register } from "../api/network-data";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onRegisterHandler = async (user) => {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  };
  return (
    <div className="note-app__body">
      <RegisterInput register={onRegisterHandler} />
    </div>
  );
};

export default RegisterPage;
