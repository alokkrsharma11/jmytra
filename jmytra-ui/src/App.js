import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './Header';
import Footer from './Footer'
import Navbar from "./components/Navbar";
import JavaTutorial from './components/JavaTutorial';

const App = () => {
  return (
  <div>
    <Navbar />
    <div className="App">
        <header className="App-header">

              <Header title='Jmytra4u' subtitle='Learn Java, with a mitra by your side.'/>
                                              <br/>
                                              <br/>
              <div className="flex gap-4">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/JavaTutorial' element={<JavaTutorial />} />
              </Routes>
              </div>

        </header>
      <Footer/>

    </div>

    </div>
  );
}

export default App;