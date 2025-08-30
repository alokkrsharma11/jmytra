import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex gap-4">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;