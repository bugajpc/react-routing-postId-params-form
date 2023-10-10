import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import List from './List';
import Form from './Form';
import BlogPost from './BlogPost';
import BlogList from './BlogList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/blog' element={<BlogList/>}/>
          <Route path="/blog/:postId" element={<BlogPost/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/list" element={<List/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
