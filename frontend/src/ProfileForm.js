import React, { useState, useContext } from "react";
import AlertContainer from "./AlertContainer";
import LoadingSpinner from "./LoadingSpinner";
import userContext from "./UserContext";

/** Updates a user
 *
 * Props:
 * - edit: Function to edit
 *
 * State:
 * - formData: state to handle form change.
 * - messages: Array of messages to be displayed in Alert
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
  const [messages, setMessages] = useState([]);

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
      setMessages(['Updated Successfully'])
    } catch (err) {
      setMessages(err);
    }
  }

  if (!user) return <LoadingSpinner />

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            disabled
            placeholder={user.username}
            name="username"
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
        {messages.length > 0 &&
          <AlertContainer messages={messages} />}
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;