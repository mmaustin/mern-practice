import {useEffect, useState} from 'react';

const intialState = {
    name: '',
    email: '',
    password: '',
    isRegistered: true
}

const Register = () => {
    const [values, setValues] = useState(intialState);

    const handleChange = e => {
        console.log(e.target);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div>
                <label htmlFor="name">
                    name
                </label>
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
        </form>
    </>
  )
}

export default Register