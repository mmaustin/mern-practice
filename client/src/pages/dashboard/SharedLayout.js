import {Outlet, Link} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

const Main = styled.main`
  display: flex;
  flex-flow: wrap;
  height: 100%;
`

const BigSideBar = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 200px;
  background: lightblue;
`

const SharedLayout = () => {

  const isTesting = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    
        <Main>
          {isTesting ? <BigSideBar><Link to='add-message'>Add Message</Link><Link to='/'>All Messages</Link></BigSideBar> : <div>Small Side Bar</div>}
          <div>
            <Navbar/>
            <div>
              <Outlet/>
            </div>
          </div>
        </Main>
    
  )
}

export default SharedLayout