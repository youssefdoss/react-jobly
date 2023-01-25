import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Logins in a user
 *
 * Props:
 * - login: Function to login
 *
 *
 * State:
 * - formData: state to handle form change.
 *
 *  RoutesList -> LoginForm --> Alert
 */
//TODO: CREATE ALERT COMPONENT
function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    await login(formData);
    navigate("/");
  }

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
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
