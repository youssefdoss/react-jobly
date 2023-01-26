import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from './Alert';

/** Logins in a user
 *
 * Props:
 * - login: Function to login
 *
 *
 * State:
 * - formData: state to handle form change.
 * - errors: Array of errors
 *
 *  RoutesList -> LoginForm --> Alert
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }
  //TODO LOADING SPINNER
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        {errors.length > 0
          && <Alert errors={errors} />}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
