import { Formik, Form, Field} from 'formik';
import { Button } from 'react-bootstrap';
import *as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export default function FormLogin () {

    return (
        <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
        }}
        >
            {({ errors, touched }) => (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="form-login">
                        <h1 className="mb-5">Welcome back!</h1>
                        <Form className="w-100">
                            <div className="form-group mb-4">
                                <Field className='form-control w-100'
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    
                                />
                                {errors.email && touched.email && 
                                <div className='text-danger'>
                                {errors.email}
                                </div>}
                            </div>
                            <div className='form-group mb-4'>
                                <Field className='form-control w-100'
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    
                                />
                                {errors.password && touched.password &&
                                <div className='text-danger'>
                                {errors.password}
                                </div>}
                            </div>
                            
                            <Button  className="mb-4 w-100 rounded" type="submit">Sign In</Button>
                            <div className="text-center">
                            <a href="/">Forgot password?</a>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
}
