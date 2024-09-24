import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/HomePage'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

function App() {
  
  const {authUser} = useAuthContext();
  return <div>

    <Routes>
        <Route path='/' element={authUser ? <Homepage/> :<Navigate to='/login'/>} />
        <Route path='/login' element={authUser ? <Navigate to="/"/>: <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to="/"/>: <SignUp/>}/>
    </Routes>

    <Toaster/>
    

  </div>
}

export default App
