import { Routes, Route,} from 'react-router-dom';
import Auth from './components/auth/auth';
import  Login  from './pages/auth/login';
import Register from './pages/auth/register';
import { useEffect } from 'react';
import { AppDispatch } from './stores/store';
import { useDispatch } from 'react-redux';
import { fetchUser } from './stores/slices/userSlice';


const App = () => {
  const dispatch :AppDispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <>  
    <Routes>
      <Route path='/auth' element={<Auth/>}>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
