import logo from './../img_1.png';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import Header from './Header';


const data = [

];
const Header = ({title, subtitle}) => {
  const [navs] = useState(data);

  return (
    <div>
      <Header title='Jmytra4u' subtitle='Learn Java, with a mitra by your side.'/>
      <br/>
      <br/>
      <div style={{paddingLeft:'10rem', paddingRight: '10rem'}} className="pageLayout">
      <PageLayout title='Welcome to Jmytra4u !' data={val}>



      </PageLayout>
      </div>
    </div>


  );
}

export default Header;