
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Protect from './components/Protect';
import Busbook from './components/Busbook';
import Ticketbookinfo from './components/Ticketbookinfo';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Protect Child={Home}/>}></Route>
        <Route path='/profile' element={<Protect Child={Profile}/>}></Route>
        <Route path='/busbook' element={<Protect Child={Busbook}/> }></Route>
        <Route path='/ticketinfo/:busid' element={<Protect Child={Ticketbookinfo}/> }></Route>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
