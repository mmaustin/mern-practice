import {useEffect, useState} from 'react';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';
import {useNavigate} from 'react-router-dom'

const intialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(intialState);

    const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext();

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }

    const handleSubmit = e => {
        e.preventDefault();
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
          displayAlert()
          return
        }
        const currentUser = {name, email, password};
        if(isMember){
            loginUser(currentUser);
        } else {
            registerUser(currentUser);
        }
    }

    useEffect(() => {
        if (user) {
          setTimeout(() => {
            navigate('/')
          }, 3000)
        }
      }, [user, navigate])    

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h3>{values.isMember ? 'Login' : 'Register'}</h3>
            {showAlert && <Alert/>}
            <div>
                {!values.isMember && (<FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />)}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type='button' onClick={toggleMember} style={{color: 'blue', backgroundColor: 'white', border: 'none'}}>
                    {values.isMember ? 'Register' : 'Login'}
                </button>
            </p>
        </form>
    </>
  )
}

export default Register