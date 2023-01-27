import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertContainer from "../common/AlertContainer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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

  const [errors, setErrors] = useState({
    messages: [],
    type: "danger",
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
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        messages: err,
      }));
    }
  }
  //TODO LOADING SPINNER
  return (
    <div className="mt-3 row d-flex justify-content-center">
      <div className="col-10 col-sm-8 col-md-6">
        <Card className="p-3">
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                value={formData.username}
                onChange={handleChange}
                name="username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
            {errors.messages.length > 0 && <AlertContainer alerts={errors} />}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;
