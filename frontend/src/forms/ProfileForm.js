import React, { useState, useContext } from "react";
import AlertContainer from "../common/AlertContainer";
import LoadingSpinner from "../common/LoadingSpinner";
import userContext from "../contexts/UserContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

/** Updates a user
 *
 * Props:
 * - edit: Function to edit
 *
 * State:
 * - formData: state to handle form change.
 * - alerts: Object of alert messages and type
 *
 *  RoutesList -> ProfileForm --> Alert
 */
function ProfileForm({ edit }) {
  const user = useContext(userContext).user;
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
  const [alerts, setAlerts] = useState({
    messages: [],
    type: null
  });

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
      await edit(formData, user.username);
      setAlerts({
        messages: ['Updated Successfully'],
        type: 'success'
      });
    } catch (err) {
      setAlerts({
        messages: err,
        type: 'danger'
      });
    }
  }

  if (!user) return <LoadingSpinner />

  return (
    <div className="mt-3 row d-flex justify-content-center">
      <div className="col-10 col-sm-8 col-md-6">
        <Card className="p-3">
          <h1 className="text-center">Profile</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                placeholder={user.username}
                name="username"
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </Form.Group>
            {alerts.messages.length > 0 && <AlertContainer alerts={alerts} />}
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Card>
      </div>
    </div>
    // <div>
    //   <h1>Profile</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         disabled
    //         placeholder={user.username}
    //         name="username"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="firstName">First Name</label>
    //       <input
    //         type="text"
    //         value={formData.firstName}
    //         onChange={handleChange}
    //         name="firstName"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName">Last Name</label>
    //       <input
    //         type="text"
    //         value={formData.lastName}
    //         onChange={handleChange}
    //         name="lastName"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="text"
    //         value={formData.email}
    //         onChange={handleChange}
    //         name="email"
    //       />
    //     </div>
    //     {alerts.messages.length > 0 &&
    //       <AlertContainer alerts={alerts} />}
    //     <button>Save Changes</button>
    //   </form>
    // </div>
  );
}

export default ProfileForm;