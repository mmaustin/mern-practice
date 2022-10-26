import {Outlet, Link} from 'react-router-dom'

const SharedLayout = () => {


  return (
    <>
        <nav>
          <Link to='/'>All Messages</Link>
          <div>
            
          </div>
          <Link to='add-message'>Add Message</Link>
        </nav>
        <Outlet/>
    </>
  )
}

export default SharedLayout