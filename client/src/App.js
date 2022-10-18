import { SharedLayout, AllMessages, AddMessage } from "./pages/dashboard";
import { Landing } from "./pages";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}> 
          <Route index element={<AllMessages/>}/>
          <Route path='add-message' element={<AddMessage/>}/>
        </Route>
        <Route path='/landing' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
