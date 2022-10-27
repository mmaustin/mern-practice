import { useAppContext } from "../context/appContext"


const Navbar = () => {
    const {logoutUser} = useAppContext();
  return (
    <div>
        <h3>Navbar</h3>
        <h3>Logo Here</h3>
        <button type="button" onClick={()=> console.log('logout user')}>Logout</button>
    </div>
  )
}
export default Navbar