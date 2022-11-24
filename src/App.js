import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { AuthProvider } from './pages/Auth'
import { PrivateRoute } from './components/PrivateRoute'

// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <AuthProvider>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <PrivateRoute exact path="/profile" element={<Profile />} />
        </AuthProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
