import React, { useState } from 'react'
import Header from './Header'
import { data } from '../menu-data'

const Home = () => {
  const [menuData] = useState(data)
  return (
    <div>
      <Header title='💖 Jmytra 💖' />
    </div>
  );
}

export default Home