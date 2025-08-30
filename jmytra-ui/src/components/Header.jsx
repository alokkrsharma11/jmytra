import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const data = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'Java',
		link: '/breakfast',
	},
	{
		title: 'React JS',
		link: '/lunch',
	},
	{
		title: 'Spring Framework',
		link: '/dinner',
	},
	{
		title: 'Databases',
		link: '/snacks',
	},
    {
		title: 'About Me',
		link: '/about',
	},
    {
		title: 'Contact Me',
		link: '/contactMe',
	},
];
const Header = ({title}) => {
  const [navs] = useState(data);

  return (
    <>
      <div>
        <h1 className='h1'>{title}</h1>
      </div>
      <div className='flex gap-8'>
        {navs.map((nav, index) => (
          <div key={index} className='li'>
            <NavLink to={nav.link} className='navs'>
              {nav.title}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;