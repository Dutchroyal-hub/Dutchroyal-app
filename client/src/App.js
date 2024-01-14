import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Home } from './Pages/Home/Home';
import { Login } from './Pages/Login/Login';
import Jobs from './Pages/Jobs/Jobs';
import Register from './Pages/Register/Register';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import PostJob from './Pages/PostJob/PostJob';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/postjob' element={<PostJob />}/>
      </Routes>
    </>
  );
}

export default App;
