import {Link} from 'react-router-dom';

const BigSidebar = () => {
  return (
    <>
        <div>
            <Link to='/'>All Messages</Link>
        </div>
        <div>
            <Link to='add-message'>Add Message</Link>
        </div>
        <div>
            <Link to='profile'>Profile</Link>
        </div>
    </>
  )
}
export default BigSidebar