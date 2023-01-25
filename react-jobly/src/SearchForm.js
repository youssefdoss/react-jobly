import React, { useState } from "react";

/** SearchForm: renders search form
 *
 * Props
 * - search: function called in parent to filter results
 *
 * State:
 * -formData: handles form data for update
 *
 * {Companylist, Joblist } --> SearchForm
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
    <form>
      <span>
        <input
          type="text"
          placeholder="Enter Search Term..."
          value={formData}
          name="formData"
          onChange={handleChange}
        />
        <button>Submit</button>
      </span>
    </form>
  );
}

export default SearchForm;
