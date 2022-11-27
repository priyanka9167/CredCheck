import { withFormik, FormikProps, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface UserFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function RegisterForm() {
  const initialValues: UserFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  return (
    <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {}}
        >
          {({ errors, touched }) => (
            <Form>
                 <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <Field
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <label htmlFor="firstname">First Name</label>
                  {touched?.firstname && errors?.firstname && (
                    <div>{errors.firstname}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <label htmlFor="lastname">Last Name</label>
                  {touched?.lastname && errors?.lastname && (
                    <div>{errors.lastname}</div>
                  )}
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Last Name</label>
                  {touched?.email && errors?.email && <div>{errors.email}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <Field
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                  <label htmlFor="password">Last Name</label>
                  {touched?.password && errors?.password && (
                    <div>{errors.password}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <Field
                    type="text"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Your Confirm Password"
                  />
                  <label htmlFor="confirm_password">Last Name</label>
                  {touched?.confirm_password && errors?.confirm_password && (
                    <div>{errors.confirm_password}</div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-3 px-4">Register</button>
                <a href="http://localhost:3000/login">Login</a>
              </div>
              </div>
            </Form>
          )}
        </Formik>
      
   
  );
}
