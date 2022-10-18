import {useEffect, useState} from 'react';
import { FormRow, Alert } from '../components';

const intialState = {
    name: '',
    email: '',
    password: '',
    isRegistered: true,
    showAlert: true
}

const Register = () => {
    const [values, setValues] = useState(intialState);

    const handleChange = e => {
        console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            {values.showAlert && <Alert/>}
            <div>
                <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
                <FormRow
                    type='text'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type='text'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Register