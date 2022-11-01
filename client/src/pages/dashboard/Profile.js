import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      displayAlert()
      return
    }
    updateUser({ name, email})
    // let combined = `${name} ${email}`;
    // console.log(combined);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
