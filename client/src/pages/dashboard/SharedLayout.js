import {Outlet} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import styled from 'styled-components';

const SharedLayout = () => {

  const isTesting = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <>
        <main>
          {isTesting ? <div>Big SideBar</div> : <div>Small Side Bar</div>}
          <div>
            <div>This Will Be A NavBar Component</div>
            <div>
              <Outlet/>
            </div>
          </div>
        </main>
    </>
  )
}

export default SharedLayout