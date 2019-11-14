import React from "react";
import "./App.css";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Form>
        <ErrorMessage
          name="name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Name:
          <Field type="text" name="name" placeholder="Enter your username" />
        </label>
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Email:
          <Field type="text" name="email" placeholder="Enter your email" />
        </label>
        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <ErrorMessage
          name="terms"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Agree to terms of service?
          <Field type="checkbox" name="terms" />
        </label>
        <input type="submit" />
      </Form>
    </div>
  );
}

const AppWithFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please enter your name."),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
    terms: yup.boolean().required("You must agree to the terms of service")
  }),
  handleSubmit(values, tools) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(App);

export default AppWithFormik;
