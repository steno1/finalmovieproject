

import './App.scss';
import Login from './pages/login/Login';
import Home from './home/Home';
import Register from './pages/register/Register';
import Watch from "./pages/watch/Watch.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user=true;//a user variable
  return (
  
<BrowserRouter>
<Routes>
 <Route path="/"
  element={user?<Home className="App" />:<Navigate to="/register"/>} />
  <Route path="/register"
   element={!user?<Register/>:<Navigate to="/" />} />
   <Route path="/login"
   element={!user?<Login/>:<Navigate to="/"/>} />
   { user && (
    <>
  <Route path="/movies" element={<Home type="movie" className="App" />} />
  <Route path="/series" element={<Home type="series" className="App" />} />
  <Route path="/watch" element={<Watch/>} />
  
   </>
    )}
      </Routes>
    </BrowserRouter>


      
     // <Home className='App'/>
    
  );
}

export default App;
