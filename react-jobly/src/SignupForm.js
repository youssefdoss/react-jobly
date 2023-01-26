import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/** Signs up a user
 *
 * Props:
 * - signup: Function to signup
 *
 * State:
 * - formData: state to handle form change.
 * - errors: Array of errors returned from API
 *
 *  RoutesList -> SignupForm --> Alert
 */
function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName:"",
    lastName:"",
    email:""
  });
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
    console.log("changing");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        {errors.length > 0 &&
          <Alert errors={errors} />}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
