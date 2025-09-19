import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import { Home, Navbar, JavaTutorial, ReactTutorial, DbTutorial, SpringTutorial, About, Support } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional

const App = () => {
  return (
  <div>
    <Navbar />
    <div className="App">
        <header className="App-header">
          <Header title='Jmytra4u' subtitle='Learn Java, with a mitra by your side.'/>
          <br/>
          <div className="flex gap-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/JavaTutorial' element={<JavaTutorial />} />
            <Route path='/ReactTutorial' element={<ReactTutorial />} />
            <Route path='/DbTutorial' element={<DbTutorial />} />
            <Route path='/SpringTutorial' element={<SpringTutorial />} />
            <Route path='/About' element={<About />} />
            <Route path='/Support' element={<Support />} />
          </Routes>
          </div>
        </header>
      <Footer/>
    </div>
    </div>
  );
}

export default App;