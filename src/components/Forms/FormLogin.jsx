import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import *as Yup from 'yup';

export default function FormLogin () {
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },  

        validationSchema: Yup.object({
            email:Yup.string()
                .email("Invalid email address")
                .required("email harus diisi"),
            password:Yup.string()
                .required('Please Enter your password')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),

        }),

        onSubmit:values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    })


    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="form-login">
            <h1 className="mb-5">Welcome back!</h1>
            <Form onSubmit={formik.handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Control
                        className="mb-4"
                        type="text"
                        placeholder="Email"
                        name="email"
                        
                        // {...formik.getFieldProps('email')}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email 
                      && formik.errors.email 
                      &&
                      <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                      </Form.Control.Feedback>}
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        className="mb-4"
                        type="password"
                        placeholder="Password"
                        name="password"
                        
                        // {...formik.getFieldProps('password')}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password 
                      && formik.errors.password 
                      && 
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>}
                </Form.Group>
                
                <Button  className="mb-4 w-100 rounded" type="submit" variant="primary" disabled={formik.isSubmitting}>Sign In</Button>
                <div className="text-center">
                  <a href="/">Forgot password?</a>
                </div>
            </Form>
        </div>
      </div>
    );
}
