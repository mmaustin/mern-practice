import {Outlet, Link} from 'react-router-dom'

const SharedLayout = () => {


  return (
    <>
        <nav>
          <Link to='all-messages'>All Messages</Link>
          <Link to='add-message'>Add Message</Link>
        </nav>
        <Outlet/>
    </>
  )
}

export default SharedLayout