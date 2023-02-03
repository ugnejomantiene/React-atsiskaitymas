import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import WebLogo from "./WebLogo";

const Register = () => {
  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('email is required').min(3, 'email must be at least 3 characters'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    passwordRepeat: Yup.string().required('Please repeat your password').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  });

  const handleSubmit = (values) => {
    if (users.find(user => user.email === values.email)) {
      alert("User with such name already exists.");
    } else {
      let newUser = {
        ...values,
        id: Date.now(),
        level: 'user'
      };
      addNewUser(newUser);
      setLoggedInUser(newUser);
      navigation('/');
    }
  }

  return (
    <>
      <div className="loginRegister">
        <WebLogo />
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
      <div className="FormRegister">
        <Formik
          initialValues={{ email: '', password: '', passwordRepeat: ''  }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <label>
                Email:
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </label>
              <label>
                Password:
                <Field name="password" type="password" />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </label>
              <label>
                Repeat Password:
                <Field name="passwordRepeat" type="password" />
                {errors.passwordRepeat && touched.passwordRepeat ? <div>{errors.passwordRepeat}</div> : null}
              </label>
              
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Register;