import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './Header';
import Footer from './Footer'

const App = () => {
  return (
  <div>

    <div className="App">
        <header className="App-header">
            <BrowserRouter>
              <Header title='Jmytra4u' subtitle='Learn Java, with a mitra by your side.'/>
                                              <br/>
                                              <br/>
              <div className="flex gap-4">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/java-tutorial' element={<java-tutorial />} />
              </Routes>
              </div>

      <Footer/>
            </BrowserRouter>
        </header>
    </div>

    </div>
  );
}

export default App;