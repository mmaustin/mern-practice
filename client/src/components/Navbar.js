import { useAppContext } from "../context/appContext";
import styled from 'styled-components';

const Navbar = () => {
    const {logoutUser} = useAppContext();
  return (
    <Wrapper>
        <h3>Navbar</h3>
        <h3>Logo Here</h3>
        <button type="button" onClick={logoutUser}>Logout</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    border-bottom: 1px solid blue;
`

export default Navbar