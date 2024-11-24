import React from "react";

const File = ({ label, type, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
};

export default File;
