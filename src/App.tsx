import { Routes, Route,} from 'react-router-dom'
import Auth from './components/auth/auth'
import { Login } from './pages/auth/login'
import Register from './pages/auth/register'
const App = () => {

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
