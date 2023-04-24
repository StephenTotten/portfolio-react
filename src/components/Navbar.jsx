import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e1e1e] text-gray-300'>
      <div>
        <img src={Logo} alt="ST Logo" style={{ width: '80px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li class='glow-button'>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class='glow-button'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li class='glow-button'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li class='glow-button'>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li class='glow-button'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#1e1e1e] flex flex-col justify-center items-center'
        }>

        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/stephen-totten/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/Crothos">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="mailto: s.g.totten@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://cdn.discordapp.com/attachments/612981552246292500/1093266431589748777/Resume_-_Stephen_Totten.pdf">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar