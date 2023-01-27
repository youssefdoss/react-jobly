import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";

/** SearchForm: renders search form
 *
 * Props:
 * - search: function called in parent to filter results
 *
 * State:
 * - formData: handles form data for update
 *
 * { Companylist, Joblist } --> SearchForm
 */
function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  /** tells parent to filter api results */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
  }

  /** updates form fields */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <div className="row d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <Form.Control
          type="search"
          placeholder="Enter Search Term..."
          value={formData}
          name="formData"
          onChange={handleChange}
        />
        <Button variant="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default SearchForm;
