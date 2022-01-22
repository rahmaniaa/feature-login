import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

export default function FormLogin () {

    // const validate = (values, props /* only available when using withFormik */) => {
    //     const errors = {};
      
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //       errors.email = 'Invalid email address';
    //     }
      
    //     return errors;
    //   };

    const doregister = (values) => {
        console.log('form values', values);
        setTimeout(() => {
            formik.setSubmitting(false);
            formik.resetForm();
        }, 2000);
    }

    const formik = useFormik({
        // initial values
        initialValues: {
            email: "",
            password: "",
        },
        // validation schema
        validationSchema: Yup.object({
            email: Yup.string(),
            password: Yup.string()
            .required()
            .min(25, 'Should more than 25 characters')
            .matches(/[a-z]/g, 'Should contain at least 1 lowercase')
            .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
            .matches(/[0-9]/g, 'Should contain at least 1 number')
            .matches(/^\S*$/, 'Should not contain spaces'),
        }),
        onSubmit: doregister
    });
    console.log(formik);
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
                        {...formik.getFieldProps('email')}
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
                        {...formik.getFieldProps('password')}
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
