import {Outlet} from 'react-router-dom'

const SharedLayout = () => {

  return (
    <>
        <h3>shared layout</h3>
        <Outlet/>
    </>
  )
}

export default SharedLayout