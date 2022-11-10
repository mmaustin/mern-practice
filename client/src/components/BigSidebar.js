import {Link} from 'react-router-dom';

const BigSidebar = () => {
  return (
    <>
        <div>
            <Link to='/'>Profile</Link>
        </div>
        <div>
            <Link to='add-message'>Add Message</Link>
        </div>
        <div>
            <Link to='all-messages'>All Messages</Link>
        </div>
    </>
  )
}
export default BigSidebar