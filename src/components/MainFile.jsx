import React, { useContext, useState } from "react";
import { DataContext } from "./store/Context";

const MainFile = () => {
  // Initial state: an object to hold values for each input field
  const [formData, setFormData] = useState({});
  const { items, removeItem, submitMainFormData, mainFormData } =
    useContext(DataContext);

  console.log("All the items here", items);

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically set the value for the field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    submitMainFormData(formData);
  };
  console.log("value of main form", mainFormData);
  return (
    <div>
      <div>Show Section</div>
      <form onSubmit={handleSubmit}>
        {items &&
          items.map((field) => (
            <div key={field.id} style={{ marginBottom: "16px" }}>
              <div className="flex">
                <div>
                  <label
                    htmlFor={field.name}
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name] || ""} // Dynamically bind the form data for each field
                    onChange={handleChange} // Trigger the change handler on each input change
                    style={{ padding: "8px", width: "100%" }}
                  />
                </div>
                <div>
                  {/* Button to delete the form input */}
                  <button
                    type="button"
                    onClick={() => removeItem(field.id)} // Correctly using field id to remove item
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        <button
          type="submit"
          style={{ padding: "10px 20px", background: "blue", color: "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default React.memo(MainFile); // Memoize the component to prevent unnecessary re-renders
