import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    agreed: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const validate = () => {
    const newErrors = {};
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8-32 characters and include uppercase, lowercase, number, and special character.";
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted successfully:", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      agreed: false,
    });

    setErrors({});
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Create Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Name:</span>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Anonymous"
            required
            value={formData.name}
            onChange={handleChange}
            autoFocus
          />
        </label>
        {errors.name && (
          <div className={styles.errorMessage}>{errors.name}</div>
        )}

        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Email:</span>
          <input
            className={styles.formInput}
            type="email"
            name="email"
            placeholder="yourmail@mail"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && (
          <div className={styles.errorMessage}>{errors.email}</div>
        )}

        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Password:</span>
          <div className={styles.inputWrapper}>
            <input
              className={`${styles.formInput} ${
                errors.password ? styles.error : ""
              }`}
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className={styles.eyeBtn}
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </label>
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password}</div>
        )}

        <label className={styles.formLabel}>
          <span className={styles.formSpan}>Password Confirm:</span>
          <div className={styles.inputWrapper}>
            <input
              className={`${styles.formInput} ${
                errors.passwordConfirm ? styles.error : ""
              }`}
              type={showPassword ? "text" : "password"}
              name="passwordConfirm"
              required
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            <button
              className={styles.eyeBtn}
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </label>
        {errors.passwordConfirm && (
          <div className={styles.errorMessage}>{errors.passwordConfirm}</div>
        )}

        <label className={styles.formCheckBox}>
          <input
            className={styles.inputCheckBox}
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
          />
          <span className={styles.formSpan}>
            I agree to the terms and conditions
          </span>
        </label>
        {errors.agreed && (
          <div className={styles.errorMessage}>{errors.agreed}</div>
        )}

        <button type="submit" className={styles.formButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Form;
