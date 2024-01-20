import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from '../src/Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Header from '../src/Pages/Shared/Header/Header'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Login from './Pages/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/experts' element={<Experts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetail/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
