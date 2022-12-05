import {Field, Form, Formik, ErrorMessage, FormikHelpers } from "formik";
import { login } from '../../services/users/users';
import * as Yup from "yup";
import { useAuthListener } from '../session';
import Router from "next/router";
import { addUser, selectToken } from "../../redux/reducers/userReducers";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { userState, cred_token } from "../../models/user.types";
import { initialUserState, selectUser } from "../../redux/reducers/userReducers";
import Link from 'next/link';


interface LoginFormValues {
    username:string;
    password: string;
  }
export default function LoginForm() {
    const initialValues: LoginFormValues = {
        password: '',
        username: ''
    }
    const dispatch = useDispatch()

    

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={async(values,{resetForm}:FormikHelpers<LoginFormValues>):Promise<void> => {
            try{
                const payload = {
                    username: values.username,
                    password:values.password
                  }
                  const res = await login(payload);
                  if(res.status === 200)
                  {
                      console.log(res.data?.resPayload);
                      localStorage.setItem('cred-users', JSON.stringify(res.data?.resPayload));
                      localStorage.setItem('cred-token',JSON.stringify(res.headers["auth-token"]));
                      const payload: initialUserState = {
                        user: res.data?.resPayload,
                        token: {
                            cred_token: res.headers["auth-token"]
                        }
                    }
                    dispatch(addUser(payload));
                      resetForm();
                      Router.push('/');
                    
                      
                  }
            }
           catch(e)
           {
                console.log(e);
           }
            
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
                                <button className="btn btn-primary py-3 px-4" type="submit"><Link href={"/register"}>Register</Link></button>
                            </div>
                        </div>
                    </Form>
                    
                   
                   
        </div>
        </Formik>
    )
}