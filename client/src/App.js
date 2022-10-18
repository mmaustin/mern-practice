import { SharedLayout, AllMessages, AddMessage } from "./pages/dashboard";
import { Landing, Register } from "./pages";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Shared Layout</Link>
        <Link to='/landing'>Landing</Link>
        <Link to='/register'>Register/Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SharedLayout/>}> 
          <Route index element={<AllMessages/>}/>
          <Route path='add-message' element={<AddMessage/>}/>
        </Route>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<h2>Error</h2>}/>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
