import {Field, Form, Formik, ErrorMessage } from "formik";
import { login } from '../../services/users/users';
import * as Yup from "yup";

interface LoginFormValues {
    username:string;
   //  password: string;
  }
export default function LoginForm() {
    const initialValues: LoginFormValues = {
      //   password: '',
        username: ''
    }
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={async(values, actions) => {
            const payload = {
              username: values.username,
            //  password:values.password
            }
            const res = await login(payload);
           }}
        
           validationSchema={Yup.object().shape({
            password: Yup.string()
              .required("Please enter password")
          })}
        >
        <div className="container mt-4">
                   <Form>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <Field
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control"
                                    placeholder="Your Username"
                                    />
                                    <label htmlFor="subject">User Name</label>
                                    <ErrorMessage name='username' component="div" className="error" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                    />
                                    <label htmlFor="subject">Password</label>
                                    <ErrorMessage name='password' component="div" className="error" />
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-4" type="submit">Login</button>
                            </div>
                        </div>
                    </Form>
        </div>
        </Formik>
    )
}