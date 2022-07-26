import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik"

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pwdField: ''
    },
    onSubmit: values => {
      alert('Login Successful');
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) {
        errors.emailError = 'Email required';
      } else if (!/^\w+@(\w+\.)+[A-Za-z]{2,4}$/.test(values.emailField)) {
        errors.emailError = 'Username should be an email'
      }

      if (!values.pwdField) {
        errors.pwdError = 'Password required';
      }
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} />
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <input name="pwdField" type="text" onChange={formik.handleChange} value={formik.values.pwdField} />
        {formik.errors.pwdError ? <div style={{color:'red'}}>{formik.errors.pwdError}</div> : null}
        <div><button name="submitBtn" type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default App;
