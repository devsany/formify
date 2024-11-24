import React, { useContext, useState } from "react";
import { DataContext } from "./store/Context";

// DynamicForm component (your form component)
const DynamicForm = () => {
  // Initial object containing the key-value pairs for form fields
  const initialData = {
    sunny: "asfaf",
    sunny1: "asdfadfs",
  };
  const { mainFormData } = useContext(DataContext);

  // State for form data
  const [formData, setFormData] = useState(mainFormData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update only the changed field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // Log the form data
    // You can also send this data to an API or handle it as needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: "16px" }}>
            <label
              htmlFor={key}
              style={{ display: "block", marginBottom: "8px" }}
            >
              {key}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value} // Set the value to the respective field value
              onChange={handleChange} // Handle change dynamically
              style={{ padding: "8px", width: "100%" }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Main component with Preview Code button
const MainComponent = () => {
  const [showPreview, setShowPreview] = useState(false);

  // Handle Preview Code button click
  const handlePreviewClick = () => {
    setShowPreview(!showPreview); // Toggle the preview section visibility
  };

  return (
    <div>
      <button
        onClick={handlePreviewClick}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {showPreview ? "Hide Preview" : "Preview Code"}
      </button>

      {showPreview && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            background: "#f9f9f9",
            borderRadius: "5px",
            fontFamily: "monospace",
          }}
        >
          <h3>Form Code Preview:</h3>
          <pre>
            <code>
              {`
import React, { useState } from "react";

// DynamicForm component (your form component)
const DynamicForm = () => {
 

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // Log the form data
    // You can also send this data to an API or handle it as needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: "16px" }}>
            <label
              htmlFor={key}
              style={{ display: "block", marginBottom: "8px" }}
            >
              {key}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value} // Set the value to the respective field value
              onChange={handleChange} // Handle change dynamically
              style={{ padding: "8px", width: "100%" }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
            `}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
