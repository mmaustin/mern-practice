import { SharedLayout, AllMessages, AddMessage, Profile } from "./pages/dashboard";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}> 
          <Route index element={<Profile/>}/>
          <Route path='add-message' element={<AddMessage/>}/>
          <Route path='all-messages' element={<AllMessages/>}/>
        </Route>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
