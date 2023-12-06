import {Routes, Route} from 'react-router-dom'
import FirstPage from './components/welcome/FirstPage'
import SecondPage from './components/welcome/SecondPage'
import ThirdPage from './components/welcome/ThirdPage'
import SignIn from './components/SignIn'
import Home from './components/Home'
import NotFound from './components/NotFound'
import UserName from './components/welcome/UserName'
import Register from './components/Register'

const App = () => {
  return (
    <Routes>
        <Route path='welcome'>
          <Route index element={<FirstPage/>} />
          <Route path="secondpage" element={<SecondPage/>} />
          <Route path="thirdpage" element={<ThirdPage/>} />
          <Route path="username" element={<UserName/>} />
        </Route>
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="signUp" element={<Register/>}/>
        <Route path='/*' element={<Home/>}/>
        <Route path='/404' element={<NotFound/>}/>
    </Routes>
  )
}

export default App