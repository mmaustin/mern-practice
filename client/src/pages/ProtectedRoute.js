
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'


const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if(userLoading) return <h3>waiting</h3>
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}

export default ProtectedRoute