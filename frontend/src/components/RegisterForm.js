import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    nicNumber: "",
    contactNumber: "",
    age: "",
    userType: "student",
    behaviorType: "non-alcoholic",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Tenant Registration</h2>

      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>

      <div className="form-group">
        <label>NIC Number:</label>
        <input
          type="text"
          name="nicNumber"
          value={formData.nicNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          min="18"
        />
      </div>

      <div className="form-group">
        <label>User Type:</label>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="student">University Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Behavior Type:</label>
        <select
          name="behaviorType"
          value={formData.behaviorType}
          onChange={handleChange}
          required
        >
          <option value="non-alcoholic">Non-Alcoholic</option>
          <option value="alcoholic">Alcoholic</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
