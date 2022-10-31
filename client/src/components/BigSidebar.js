import {Link} from 'react-router-dom';

const BigSidebar = () => {
  return (
    <div>
        <Link to='/'>All Messages</Link>
        <Link to='add-message'>Add Message</Link>
        <Link to='profile'>Profile</Link>
    </div>
  )
}
export default BigSidebar