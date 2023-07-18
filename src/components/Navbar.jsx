import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const ulStyles = 'list-none hidden sm:flex flex-row gap-10';
  const liStyles = 'hover:text-white text-[18px] font-medium cursor-pointer';
  const responsiveUlStyles = 'list-none flex justify-end items-start flex-col gap-4';
  const responsiveLiStyles = 'font-poppins font-medium text-[16px] cursor-pointer';
  const handleClick = () => {
    setToggle(!toggle);
  };

  const navOptions = (ulStyles, liStyles, handleClick = () => {}) => (
    <ul className={ulStyles}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : 'text-secondary'}${liStyles}`}
          onClick={() => {
            setActive(link.title);
            handleClick();
          }}>
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img src={logo} className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Mariano &nbsp;
            <span className='sm:block hidden'>| Di Candia</span>
          </p>
        </Link>
        {navOptions(ulStyles, liStyles)}
        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            {navOptions(responsiveUlStyles, responsiveLiStyles, handleClick)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
