import { Routes, Route, Navigate,} from 'react-router-dom';
import Auth from './components/auth/auth';
import  Login  from './pages/auth/login';
import Register from './pages/auth/register';
import { useEffect } from 'react';
import { AppDispatch, RootState } from './stores/store';
import { useDispatch } from 'react-redux';
import { fetchUser } from './stores/slices/userSlice';
import { useSelector } from 'react-redux';
import Loading from './utils/Loading';
import Shop from './components/shop/shop';
import Home from './pages/shop/Home';
import Otp from './pages/otp/Otp';




const PrivateRoutes = ({children}:any) => {
  const {data, loading , error} = useSelector((state:RootState)=>state.user)
  if(loading || error){
    return <Loading/>
  }else if (data){
    return  children
  }else{
      return  <Navigate to='/404page'/>
  }
 
}

const AuthRoutes = ({children}:any) => {
  const {data, loading } = useSelector((state:RootState)=>state.user)
  if(loading){
    return <Loading/>
  }
  if ( data) return <Navigate to="/shop/home" /> ;
 
  
  return children;
}

const App = () => {
  const dispatch :AppDispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <>  
    <Routes>
      <Route path='/auth' element={
        <AuthRoutes>
          <Auth/>
        </AuthRoutes>
      }>
      <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>}/>
        <Route path='email-verify' element={<Otp/>}/>
      </Route>
      

      <Route path='/shop' element={<PrivateRoutes> <Shop/> </PrivateRoutes>}>
        <Route path='home' element={<Home/>}/> 

      </Route>
      <Route path='*' element={<Navigate to='/auth/login'/>}/>

    </Routes>
    </>
  )
}

export default App
