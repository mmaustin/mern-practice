import {useEffect, useState} from 'react';
import { FormRow, Alert } from '../components';

const intialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

const Register = () => {
    const [values, setValues] = useState(intialState);

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

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
            {values.isMember ? 'Login' : 'Register'}
            {values.showAlert && <Alert/>}
            <div>
                {!values.isMember && (<FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />)}
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
            <p>
                <button type='button' onClick={toggleMember} style={{color: 'blue', backgroundColor: 'white', border: 'none'}}>
                    {values.isMember ? 'Register' : 'Login'}
                </button>
            </p>
        </form>
    </>
  )
}

export default Register