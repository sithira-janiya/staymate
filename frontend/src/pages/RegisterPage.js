import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../services/authService";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (userData) => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await registerUser(userData);
      setMessage(response.message);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Registration failed");
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <RegisterForm onSubmit={handleRegister} loading={loading} />
      </div>
    </div>
  );
};

export default RegisterPage;
