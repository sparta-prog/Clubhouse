import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
const isAuth = false;
const user = {
  activated:true
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path='/' element={<GuestAuth>
          <Home />
        </GuestAuth>} ></Route>

        <Route path='/authenticate' element={<GuestAuth>
          <Authenticate />
          </GuestAuth>} ></Route>

        <Route path='/activate' element={<SemiProtectedRoute>
          <Activate />
        </SemiProtectedRoute>}></Route>

        <Route path='/rooms' element={<ProtectedRoute>
          <Rooms />
        </ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function GuestAuth({ children }) {
  // let auth = useAuth();
  // let location = useLocation();

  if (isAuth) {
    // Redirect them to the /private rooms page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // than dropping them off on the home page.
    //state={{ from: location }} 
    return <Navigate to="/rooms" />;
  }

  return children;
}

function SemiProtectedRoute({ children }) {
  let location = useLocation();

  return (
    !isAuth ? (
      <Navigate to='/' state={{ from: location }} />
    ) : isAuth && !user.activated ? (
      children
    ) : (
      <Navigate to='/rooms' state={{ from: location }} />
    )
  );

}

function ProtectedRoute({children}) {
let location = useLocation();

  return (
    !isAuth ? (
      <Navigate to='/' state={{ from: location }} />
    ) : isAuth && !user.activated ? (
      <Navigate to='/activate' state={{ from: location }} />
    ) : (
      children
    )
  );
}

export default App;
