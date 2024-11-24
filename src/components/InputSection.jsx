import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { DataContext } from "./store/Context";
const generateRandomNumber1 = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result; // Random number between 0 and 9999
};
const Input = () => {
  const [data, setData] = useState([]);
  const { addItem } = useContext(DataContext);
  const [randomNumber, setRandomNumber] = useState("");
  const [formId, setFormId] = useState(generateRandomNumber1(8));

  const onSubmit = (values, { resetForm }) => {
    // console.log("the from values", values);
    setData([...data, values]);
    // context globel data management
    addItem(values);
    // Reset the form after submission
    const newId = generateRandomNumber1(8);
    // Update the formId state
    setFormId(newId);
    resetForm({
      values: {
        id: newId,
        type: "",
        name: "",
        placeholder: "",
        label: "",
      },
    });
  };
  console.log(data);
  console.log(randomNumber);
  const initialValues = {
    id: formId,
    type: "",
    name: "",
    placeholder: "",
    label: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.type) {
      errors.type = "Required.";
    }
    if (!values.name) {
      errors.name = "Required.";
    }
    if (!values.placeholder) {
      errors.placeholder = "Required.";
    }
    if (!values.label) {
      errors.label = "Required.";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="type">Type of input Field</label>
          <Field type="text" name="type" id="type" placeholder="Enter type" />
          <div className="text-red-500">
            <ErrorMessage name="type" />
          </div>
        </div>
        <div>
          <label htmlFor="name">Enter Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter name" />
          <div className="text-red-500">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="placeholder">Enter Placeholder</label>
          <Field
            type="text"
            name="placeholder"
            id="placeholder"
            placeholder="Enter placeholder"
          />
          <div className="text-red-500">
            <ErrorMessage name="placeholder" />
          </div>
        </div>
        <div>
          <label htmlFor="label">Enter label</label>
          <Field
            type="text"
            name="label"
            id="label"
            placeholder="Enter label name"
          />
          <div className="text-red-500">
            <ErrorMessage name="label" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default React.memo(Input);
