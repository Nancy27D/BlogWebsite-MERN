
import './App.css';
import {BrowserRouter as Router , Routes , route, Route} from 'react-router-dom'
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoutes from './ProtectedRoutes';
import AddBlog from './components/blogs/AddBlog';
import Editblog from './components/blogs/Editblog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/signup' element={<Signup/> }/>
          <Route path='/login' element={<Login/> }/>
          <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>

          <Route path='/addblog' element={<AddBlog/>}/>
          <Route path='/editblog/:id' element={<Editblog/>}/>
        </Routes>
      </Router>  
       
    </div>
  );
}

export default App;
