import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import ProductsList from './components/products/products';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes >
        <Route path='/' element= {<Home />}/>
        <Route path='/products' element={<ProductsList />} />
      </Routes>
    </Router>
  );
}

export default App;
