import {Outlet} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { BigSidebar } from '../../components';

const Main = styled.main`
height: 100%;
width:100%;
display: flex;

.archer{
  border-right: 1px solid grey;
  width: 20%;
  height: 400px;
}
`

const BigSideBar = styled.div`
  height: 100%;
  background: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column; 
`

const SharedLayout = () => {

  const isTesting = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    
        <Main>
          <div className='archer'>
            {isTesting ? <BigSideBar><BigSidebar/></BigSideBar> : <div>Small Side Bar</div>}
          </div>
          <NavCon>
            <Navbar/>
            <div>
              <Outlet/>
            </div>
          </NavCon>
        </Main>
    
  )
}

const NavCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;  
`

export default SharedLayout